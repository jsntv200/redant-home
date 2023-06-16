// https://dixonandmoe.com/rellax/
import { Controller } from "@hotwired/stimulus";
import AOS from "aos";
import "aos/src/sass/aos.scss";

export class AosController extends Controller {
  connect() {
    this.aos = AOS.init();
  }

  disconnect() {
    this.aos.destroy();
    this.aos = undefined;
  }
}