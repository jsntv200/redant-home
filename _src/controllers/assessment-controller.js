import { Controller } from "@hotwired/stimulus";
import results from '../../_data/results.json' assert { type: 'JSON' };
import questions from '../../_data/assessment.json' assert { type: 'JSON' };

export class AssessmentController extends Controller {
  static targets = [
    "answer",
    "answersInput",
    "answerSection",
    "colorsInput",
    "emailInput",
    "form",
    "invalidEmail",
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
    basePath: "/online-payments/payment-maturity-assessment/",
    colorHashes: {type: Array, default: ["dc697a", "fdc95b", "c2d7b1", "92defb", "9069f7"]},
    sections: {type: Array, default: ["current", "your-team", "owner", "technology"]}
  }

  connect() {
    if (this.isBasePath) {
      this.checkIncomplete();
    } else if(this.isSubmitPath) {
      this.calculateOrRedirect();
    } else if(this.isResultsPath) {
      this.calculate();
    } else {
      this.setActiveSections();
      this.setActiveQuestions();
      this.setActiveAnswer();
    }
  }
  
  get isBasePath() {
    return location.pathname === this.basePathValue;
  }
  
  get isSubmitPath() {
    return location.pathname === `${this.basePathValue}submit`;
  }
  
  get isResultsPath() {
    return location.pathname === `${this.basePathValue}results`;
  }

  get answers() {
    const answers = localStorage.getItem("answers");
    return answers === 'null' || answers === null ? {} : JSON.parse(answers);
  }
  
  calculateOrRedirect() {  
    if (Object.entries(this.answers).length > 0) {
      this.answersInputTarget.value = JSON.stringify(this.answers);
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
      this.answers;

    const scoreRange = Object.keys(questions)
      .reduce((accumulator, currentValue) => {
        return accumulator.concat({
          max: questions[currentValue]["max"],
          min: questions[currentValue]["min"]
        });
      }, []);

    var scores = "";
    var colors = "";

    for (const [i, values] of Object.values(answers).entries()) {
      const maxScore = scoreRange[i]["max"];
      const minScore = scoreRange[i]["min"];
      const range = maxScore - minScore;
      const scoreLevels = [
        minScore, 
        minScore + range/5,
        minScore + range/2,
        maxScore - range/5,
        maxScore
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

      if (location.pathname === `${this.basePathValue}submit`) {
        scores += `${results[i]["results"][closest]["title"]},`;
        colors += `${this.colorHashesValue[closest]},`;
      } else {
        this.setResult(i, closest);
      }
    }

    if (location.pathname === `${this.basePathValue}submit`) {
      this.scoresInputTarget.value = scores.slice(0, -1);
      this.colorsInputTarget.value = colors.slice(0, -1);
    }
  }

  checkIncomplete() {
    if (Object.entries(this.answers).length > 0) {
      this.resumeTarget.classList.toggle("d-none");
    }
  }
  
  clearAnswers() {
    localStorage.removeItem("answers");
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
    location.href = `${this.basePathValue}${href}`;
  }

  submit() {
    if (this.validateEmail() === false) {
      this.invalidEmailTarget.classList.toggle("d-none");
      return false;
    }

    const formData = this.getFormData();
    const url = this.formTarget.action;
    const self = this;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    this.submitButtonTarget.setAttribute('disabled', '');

    var xhr = new XMLHttpRequest();

    xhr.open('POST', url);
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

  resume() {    
    if (Object.entries(this.answers).length > 0) {
      const section = Object.keys(this.answers)[Object.keys(this.answers).length - 1];
      const question = this.answers[section].length;
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
  
    if (Object.entries(this.answers).length === 0) return;
  
    for (const i in this.answerTargets) {
      const target = this.answerTargets[i];

      if (!this.answers[section] || !this.answers[section][i]) return;
  
      const oldAnswer = this.answers[section][i][0];
      
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
      const hasAnswer = !!this.answers[section] && !!this.answers[section][i];

      if (!hasAnswer && i > index) {
        this.questionTargets[i].setAttribute("disabled", true);
        this.questionTargets[i].classList.toggle("opacity-25");
      }
    }
  }
  
  setActiveSections() {
    if (Object.entries(this.answers).length > 0) {
      const sections = Object.keys(this.answers);
    
      for (const i in this.sectionsValue) {
        const slug = this.sectionsValue[i];

        if (location.pathname.includes(slug) || !!sections.find(section => section === slug)) {
          this.sectionTargets[i].removeAttribute("disabled");
          this.sectionTargets[i].classList.remove("opacity-25");

          this.sectionSliderTarget.scrollLeft = this.sectionTargets[i].offsetLeft - this.sectionSliderTarget.offsetLeft;
        }
      }
    }
  }

  setAnswer(data) {
    // Data format: "section-slug,question-number,answer-number,answer-weight"
    const answer = data.split(',');
    var answers = this.answers;

    if (answers[answer[0]]) {
      if (answers[answer[0]][answer[1] - 1]) {
        answers[answer[0]][answer[1] - 1] = [parseInt(answer[2]), parseInt(answer[3])];
      } else {
        answers[answer[0]].push([parseInt(answer[2]), parseInt(answer[3])]);
      }
    } else {
      answers[answer[0]] = [[parseInt(answer[2]), parseInt(answer[3])]];
    }

    // Saved data format: {"sectionName": [["answerNumber", "answerWeightNumber"], ["answerNumber", "answerWeightNumber"]]}
    // The answer positions in the setionName array correspond to the question number
    localStorage.setItem("answers", JSON.stringify(answers));
  }

  setResult(sectionIndex, resultIndex) {
    this.resultsTargets[sectionIndex].children[0].children[0].innerHTML = 
      `${results[sectionIndex]["title"]}<p class="d-sm-none"><b>Score :</b> ${results[sectionIndex]["results"][resultIndex]["title"]}</p>`;
    this.resultsTargets[sectionIndex].children[1].children[0].innerHTML = 
      results[sectionIndex]["results"][resultIndex]["title"];
    this.resultsTargets[sectionIndex].children[2].children[0].innerHTML = 
      results[sectionIndex]["results"][resultIndex]["description"];
  }

  start() {
    this.clearAnswers();
    location.href = `${this.basePathValue}current?q=1`;
  }

  validateEmail() {
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexp.test(this.emailInputTarget.value.toLowerCase());
  }
}
