import { Controller } from "@hotwired/stimulus";
import Rellax from "rellax";

export class RellaxController extends Controller {
  static targets = [
    "item",
  ]

  connect() {

    this.rellax = new Rellax('.rellax', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }

  disconnect() {
    this.rellax.destroy();
    this.rellax = undefined;
  }
}