import { Controller } from "@hotwired/stimulus";

export class NavController extends Controller {
  static targets = ["item"];

  static values = {
    activeClass: { type: String, default: "active" },
    scrollAnimation: { type: String, default: "false" },
  };

  connect() {
    if (!this.items) return;
    this.toggleActive();

    if (this.scrollAnimationValue === "true") {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  }

  disconnect() {
    if (this.scrollAnimationValue === "true") {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
  }

  handleScroll() {
    if (window.pageYOffset > 0) {
      this.element.classList.add('backdrop-blur-lg', 'bg-black/40');
    } else {
      this.element.classList.remove('backdrop-blur-lg', 'bg-black/40');
    }
  }

  isActive(link) {
    const { pathname } = window.location;

    return link.pathname === "/"
      ? pathname === "/"
      : pathname.indexOf(link.pathname) >= 0;
  }

  setActive(link) {
    link.classList.add(this.activeClass);
  }

  setHeight(event) {
    const { height } = event.detail || {};

    if (height) {
      this.element.style.height = `${height}px`;
    }
  }

  toggleActive() {
    this.items
      .filter(this.isActive.bind(this))
      .forEach(this.setActive.bind(this));
  }

  get activeClass() {
    return this.activeClassValue;
  }

  get items() {
    return this.itemTargets;
  }
}
