import { Controller } from "@hotwired/stimulus";

export class TypewriterWordController extends Controller {
  static values = {
    alt: Array,
  };

  connect() {
    this.altValue = [this.element.innerText].concat(this.altValue); // insert orig word and shuffle alt words
    this.altIndex = 0; // start with alt word at this index

    this.element.classList.toggle('relative', true);
  }

  disconnect() {
    this.clearTypeInterval();
  }

  startAnimation() {
    this.element.classList.toggle('text-red-50', true);
    this.element.classList.toggle('typewriter-cursor', true);

    // start typing after a small delay so the highlight colour and cursor are visible
    setTimeout(this.start.bind(this), 500);
  }

  start() {
    // add delay to allow the text to finish transitioning to red
    // before adding the slower transition to black
    setTimeout(() => {
      this.element.classList.toggle('transition-color', 'duration-1500', 'ease-in-out', true);
    }, 500);

    this.clearTypeInterval();

    // progress to next word in the set
    this.altIndex++;

    // start typing
    this.typeInterval = setInterval(this.type.bind(this), 100);
  }

  finish() {
    this.clearTypeInterval();

    // fade red to black
    setTimeout(() => {
      this.element.classList.toggle('text-red-50', false);
      this.element.classList.toggle('typewriter-cursor', false);
    }, 1000);

    // remove slow transition so next black to red is fast
    setTimeout(() => {
      this.element.classList.toggle('transition-color', 'duration-1500', 'ease-in-out', false);
    }, 2000);
  }

  type() {
    if (this.text == this.word) {
      this.finish();
    }

    if (this.text.length == 0 || this.word.startsWith(this.text)) {
      // typing new word
      this.text = this.word.slice(0, this.text.length + 1);
    }
    else {
      // removing old word
      this.text = this.text.slice(0, -1);
    }
  }

  clearTypeInterval() {
    if (this.typeInterval) {
      clearInterval(this.typeInterval);
    }
  }

  get word() {
    return this.altValue[this.altIndex % this.altValue.length];
  }

  set text(value) {
    this.element.textContent = value;
  }

  get text() {
    return this.element.textContent;
  }
}
