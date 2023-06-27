import { Controller } from "@hotwired/stimulus";
import { random } from "../utils";
import { getChildControllers } from "../utils/selectors";

export class TypewriterController extends Controller {
  connect() {
    if (location.pathname !== "/") return;
    // TODO maybe longer to give words time to connect
    setTimeout(this.locateChildWordControllers.bind(this), 200);

    this.wordIndex = 0;
    this.stepCounter = 0;

    this.start();
  }

  disconnect() {
    this.clearStepInterval();
    this.clearResetTimeout();
  }

  locateChildWordControllers() {
    this.randomisedWords = random(this.wordControllers);
  }

  start() {
    this.clearResetTimeout();
    // step through counter until it reaches a trigger threshold (500ms)
    this.stepInterval = setInterval(this.step.bind(this), 200);
  }

  onMouseLeave(event) {
    event.preventDefault();
    this.clearStepInterval();

    // reset step counter after an extended mouseout (1.5s)
    this.resetTimeout = setTimeout(this.reset.bind(this), 1500);
  }

  step() {
    this.clearResetTimeout();

    this.stepCounter++;

    // start the word animation after a few ticks
    if (this.stepCounter == 5) {
      this.startNextWordAnimation();
    }

    // allow retriggering after an extended delay if continuing to hold mouseover
    if (this.stepCounter >= 40) {
      this.stepCounter = 0;
    }
  }

  reset() {
    this.stepCounter = 0;
  }

  startNextWordAnimation() {
    this.wordIndex++;
    this.randomisedWords[this.wordIndex % this.randomisedWords.length].startAnimation();
  }

  clearStepInterval() {
    if (this.stepInterval) {
      clearInterval(this.stepInterval);
    }
  }

  clearResetTimeout() {
    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout);
    }
  }

  get wordControllers() {
    return getChildControllers(this, "typewriter-word");
  }
}
