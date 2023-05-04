import { Controller } from "@hotwired/stimulus";
import results from '../../_data/results.json' assert { type: 'JSON' };
import questions from '../../_data/assessment.json' assert { type: 'JSON' };

export class AssessmentController extends Controller {
  static targets = [
    "answer",
    "answersInput",
    "answerSection",
    "bookingIframe",
    "colorsInput",
    "emailInput",
    "fill",
    "form",
    "invalidEmail",
    "isMobile",
    "name",
    "question",
    "questionSlider",
    "response",
    "results",
    "resume",
    "scoresInput",
    "section",
    "sectionSlider",
    "submitButton"
  ];

  static values = {
    basePathPayment: "/online-payments/payment-maturity-assessment/",
    basePathPrivacy: "/privacy/privacy-maturity-assessment/",
    basePathCyberSecurity: "/cyber-security/cyber-security-maturity-assessment/",
    colorHashes: { type: Array, default: ["dc697a", "fdc95b", "c2d7b1", "92defb", "9069f7"] }
  }

  connect() {
    if (this.isBasePath) {
      this.checkIncomplete();
    } else if(this.isSubmitPath) {
      this.calculateOrRedirect();
    } else if(this.isResultsPath) {
      this.calculate();
    } else if (this.isBookingPath) {
      this.resizeContainer();
    } else {
      this.setActiveSections();
      this.setActiveQuestions();
      this.setActiveAnswer();
      this.setProgress();
    }
  }

  get assessment() {
    let data = [];

    if (location.pathname.includes(this.basePathPaymentValue)) {
      data = ["payment", this.basePathPaymentValue, "current"];
    } else if (location.pathname.includes(this.basePathPrivacyValue)) {
      data = ["privacy", this.basePathPrivacyValue, "collection-and-use"];
    } else if (location.pathname.includes(this.basePathCyberSecurityValue)) {
      data = ["cyber-security", this.basePathCyberSecurityValue, "govern"];
    }

    return this.assessmentData(data);
  }

  get isBookingPath() {
    return location.pathname.includes("book-call");
  }

  get isSubmitPath() {
    return location.pathname === `${this.basePathValue}submit`;
  }

  get isResultsPath() {
    return location.pathname === `${this.basePathValue}results`;
  }

  get storedAnswers() {
    const answers = localStorage.getItem(this.assessment.storageKey);
    return answers === 'null' || answers === null ? {} : JSON.parse(answers);
  }

  get isBasePath() {
    return location.pathname === this.assessment.basePath;
  }

  get isSubmitPath() {
    return location.pathname === `${this.assessment.basePath}submit`;
  }

  get isResultsPath() {
    return location.pathname === `${this.assessment.basePath}results`;
  }

  get scoreRange() {
    return Object.values(questions[this.assessment.slug]).map(q => ({ max: q.max, min: q.min }));
  }

  get sections() {
    return Object.values(questions[this.assessment.slug]).map(q => q.slug);
  }

  get totalAnswers() {
    return Object.values(this.storedAnswers).reduce((acc, curr) => {
      if (curr) {
        return acc + curr.length;
      }
    }, 0);
  }

  get totalQuestions() {
    return Object.values(questions[this.assessment.slug]).reduce((accumulator, current) => accumulator + current.questions.length, 0);
  }

  assessmentData([type, path, section]) {
    return {
      slug: type,
      basePath: path,
      storageKey: `${type}Answers`,
      start: section
    }
  }

  calculateOrRedirect() {
    if (Object.entries(this.storedAnswers).length > 0) {
      this.answersInputTarget.value = JSON.stringify(this.storedAnswers);
      this.calculate();
    } else {
      this.navigateTo();
    }
  }

  calculate() {
    const params = this.getParams();
    const weighting = 0.6;
    const answers = params.has('r') ?
      JSON.parse(decodeURIComponent(params.get('r')).replaceAll('&#34;', '"')) :
      this.storedAnswers;

    if (!answers) {
      this.navigateTo();
    }

    if (params.has('name')) {
      this.nameTarget.innerHTML = `${decodeURIComponent(params.get('name'))}: `;
    }

    var scores = "";
    var colors = "";

    for (const [i, values] of Object.values(answers).entries()) {
      const max = Number(this.scoreRange[i]["max"]).toFixed(1);
      const min = Number(this.scoreRange[i]["min"]).toFixed(1);
      const range = Number(max - min).toFixed(1);

      const scoreLevels = [
        Number(min),
        Number(min) + Number(range)/5,
        Number(min) + Number(range)/2,
        Number(max) - Number(range)/5,
        Number(max)
      ];
      // To calculate result: answer_number * (weight * weighting)
      const totalScore = values.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue[0] * (currentValue[1] * weighting))
      }, 0);

      var closest = -1;
      var closeDiff = -1;
      // Get the closest score level to determine which result to present
      for (const ii in scoreLevels) {
        if (Math.abs(scoreLevels[ii] - totalScore) < closeDiff || closest === -1) {
          closeDiff = Math.abs(scoreLevels[ii] - totalScore);
          closest = ii;
        }
      }

      if (location.pathname === `${this.assessment.basePath}submit`) {
        scores += `${results[this.assessment.slug][i]["results"][closest]["title"]},`;
        colors += `${this.colorHashesValue[closest]},`;
      } else {
        this.setResult(i, closest);
      }
    }

    if (location.pathname === `${this.assessment.basePath}submit`) {
      this.scoresInputTarget.value = scores.slice(0, -1);
      this.colorsInputTarget.value = colors.slice(0, -1);
    }
  }

  checkIncomplete() {
    if (Object.entries(this.storedAnswers).length > 0) {
      this.resumeTarget.classList.toggle("d-none");
    }
  }

  clearAnswers() {
    localStorage.removeItem(this.assessment.storageKey);
  }

  clearErrors() {
    this.invalidEmailTarget.classList.add("d-none");
  }

  diff(x, y) {
    if ( Math.sign( x ) === Math.sign( y ) ) {
      return Math.abs( x - y );
    } else {
      return Math.abs( x ) + Math.abs( y );
    }
  }

  download() {
    window.print();
  }

  getFormData() {
    const elements = this.formTarget.elements;
    var honeypot;
    var data = {};
    var email = "";

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "user") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if (elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      } else if (elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    fields.forEach(function(name) {
      const element = elements[name];
      data[name] = element.value;

      if (element.name === "email") {
        email = data[name];
      }

      if (element.length) {
        var formData = [];

        for (const i in element) {
          const item = element.item(i);

          if (item.checked || item.selected) {
            formData.push(item.value);
          }
        }

        data[name] = formData.join(', ');
      }
    });

    // add form-specific values into the data
    data.formDataNameOrder = JSON.stringify(fields);
    data.formGoogleSheetName = this.formTarget.dataset.sheet || "responses";
    data.formGoogleSendEmail = email;

    return { data, honeypot };
  }

  getParams() {
    return new URLSearchParams(location.search);
  }

  getQuestionIndexFromUrlParams() {
    const params = this.getParams();
    return params.has('q') ? parseInt(params.get('q')) - 1 : 0;
  }

  navigateTo(href = '') {
    location.href = `${this.assessment.basePath}${href}`;
  }

  submit() {
    if (this.validateEmail() === false) {
      this.invalidEmailTarget.classList.toggle("d-none");
      return false;
    }

    const formData = this.getFormData();

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    this.submitButtonTarget.setAttribute('disabled', '');

    var xhr = new XMLHttpRequest();
    xhr.open('POST', this.formTarget.action);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.formTarget.reset();
        this.formTarget.classList.toggle("d-none");
        this.responseTarget.classList.replace("d-none", "d-flex");
      }
    };

    var encoded = Object.keys(formData.data).map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(formData.data[k]);
    }).join('&');

    xhr.send(encoded);
  }

  resizeContainer() {
    const isMobile = this.isMobileTarget.offsetWidth > 0;
    const iframeHeight = isMobile ? 1250 : 780;
    this.bookingIframeTarget.parentElement.style.height = iframeHeight + 'px';
  }

  resume() {
    if (Object.entries(this.storedAnswers).length > 0) {
      const section = Object.keys(this.storedAnswers)[Object.keys(this.storedAnswers).length - 1];
      const question = this.storedAnswers[section].length;
      location.href += `/${section}?q=${question}`;
    }
  }

  select(event) {
    if (event.params.answer) {
      this.setAnswer(event.params.answer);
    }

    this.navigateTo(event.params.href);
  }

  setActiveAnswer() {
    const section = location.pathname.split('/').reverse()[0];

    if (Object.entries(this.storedAnswers).length === 0) return;

    for (const i in this.answerTargets) {
      const target = this.answerTargets[i];

      if (!this.storedAnswers[section] || !this.storedAnswers[section][i]) return;

      const oldAnswer = this.storedAnswers[section][i][0];

      if (!target || !oldAnswer) return;

      const element = target.children[oldAnswer - 1];

      element.classList.toggle("border-light");
      element.classList.toggle("active-question");
    }
  }

  setActiveQuestions() {
    const index = this.getQuestionIndexFromUrlParams();
    const section = location.pathname.split('/').reverse()[0];

    this.answerSectionTargets[index].classList.toggle("d-none");
    this.questionTargets[index].classList.toggle("border-light");
    this.questionTargets[index].classList.toggle("active");
    this.questionTargets[index].parentElement.classList.toggle("border-gradient");
    this.questionSliderTarget.scrollLeft = this.questionTargets[index].offsetLeft - this.questionSliderTarget.offsetLeft;

    for (const i in this.questionTargets) {
      const hasAnswer = this.storedAnswers?.[section]?.[i] ?? false;

      if (!hasAnswer && i > index) {
        this.questionTargets[i].setAttribute("disabled", true);
        this.questionTargets[i].classList.toggle("opacity-25");
      }
    }
  }

  setActiveSections() {
    if (Object.entries(this.storedAnswers).length > 0) {
      const sections = Object.keys(this.storedAnswers);

      for (const i in this.sections) {
        const slug = this.sections[i];

        if (location.pathname.includes(slug) || !!sections.find(section => section === slug)) {
          this.sectionTargets[i].removeAttribute("disabled");
          this.sectionTargets[i].classList.remove("opacity-25");
          this.sectionSliderTarget.scrollLeft = this.sectionTargets[i].offsetLeft - this.sectionSliderTarget.offsetLeft;
        }

        if (location.pathname.includes(slug)) {
          this.sectionTargets[i].classList.add("border-black");
        }
      }
    } else {
      this.sectionTargets[0].removeAttribute("disabled");
      this.sectionTargets[0].classList.remove("opacity-25");
      this.sectionTargets[0].classList.add("border-black");
    }
  }

  setAnswer(data) {
    const [sectionSlug, questionNumber, answerNumber, answerWeight] = data.split(",");
    const answers = this.storedAnswers;
    const questionAnswers = answers[sectionSlug] || [];

    questionAnswers[questionNumber - 1] = [parseInt(answerNumber), parseInt(answerWeight)];
    answers[sectionSlug] = questionAnswers;

    // Saved data format: {"sectionName": [[answerNumber, answerWeightNumber], [...]]}
    // The arrays in the setionName array are ordered by question number
    localStorage.setItem(this.assessment.storageKey, JSON.stringify(answers));
  }

  setProgress() {
    const percentage = Math.ceil((this.totalAnswers * 100) / this.totalQuestions);
    this.fillTarget.style.width = `${percentage}%`;
    this.fillTarget.setAttribute('aria-valuenow', `${percentage}`);
  }

  setResult(sectionIndex, resultIndex) {
    const sectionElement = this.resultsTargets[sectionIndex];
    const result = results[this.assessment.slug][sectionIndex]["results"][resultIndex];

    sectionElement.children[0].children[0].innerHTML = `${results[this.assessment.slug][sectionIndex]["title"]}<p class="d-sm-none"><b>Score :</b> ${result["title"]}</p>`;
    sectionElement.children[1].children[0].innerHTML = result["title"];
    sectionElement.children[2].children[0].innerHTML = result["description"];
  }

  start() {
    this.clearAnswers();
    location.href = `${this.assessment.basePath}${this.assessment.start}?q=1`;
  }

  validateEmail() {
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexp.test(this.emailInputTarget.value.toLowerCase());
  }
}
