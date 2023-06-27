// https://dixonandmoe.com/rellax/
import { Controller } from "@hotwired/stimulus";
import Rellax from "rellax";

export class RellaxController extends Controller {
  connect() {
    this.rellax = new Rellax(".rellax");
  }

  disconnect() {
    this.rellax.destroy();
    this.rellax = undefined;
  }
}