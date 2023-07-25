import { Controller } from "@hotwired/stimulus";
import { random } from "../utils";

export class FakeNewsController extends Controller {
  static values = {
    count: { type: Number, default: 4 },
  };

  connect() {
    this.element.innerHTML = this.render();
  }

  render() {
    return `
      <div class="row">
        ${this.randomNewsItems.map(this.renderItem).join("")}
      </div>
    `;
  }

  renderItem({ link, image, subtitle, title }) {
    return `
      <div class="col-md-3">
        <a href="${link}" class="card read-more-card">
          <div class="card-img-wrapper">
            <img class="card-img-top" src="${image}" alt="${title}" />
          </div>
          <div class="card-block py-3">
            <h4 class="card-title">${title}</h4>
            <p class="card-text">${subtitle}</p>
          </div>
        </a>
      </div>
    `;
  }

  get randomNewsItems() {
    return random(this.news).splice(0, this.count);
  }

  get count() {
    return this.countValue;
  }

  get news() {
    return [
      {
        title: "You'll never believe this weight loss trick",
        subtitle: "LifeHacks",
        image: "/assets/images/fakenews/fake1.jpg",
        link: "/portfolio/12wbt/",
      },
      {
        title: "Every Australian born after 1905 should read this",
        subtitle: "Tax for life",
        image: "/assets/images/fakenews/fake3.jpg",
        link: "/portfolio/outdoor-automated-proposal-platform/",
      },
      {
        title: "10 easy ways to silence a crying child",
        subtitle: "Parenting tips",
        image: "/assets/images/fakenews/fake4.jpg",
        link: "/portfolio/huggies/",
      },
      {
        title:
          "Hillary Clinton abducted my child and sacrificed it to an Alien master",
        subtitle: "OMG",
        image: "/assets/images/fakenews/fake6.jpg",
        link: "/portfolio/tribe-influencer-marketplace/",
      },
      {
        title: "Doctors Shocked By Mum's Trick To Lose 12 Kg In 2 Weeks",
        subtitle: "LifeHacks",
        image: "/assets/images/fakenews/fake7.jpg",
        link: "/portfolio/12wbt-dynamic-video/",
      },
      {
        title: "The one spy device every car owner should have",
        subtitle: "OMG",
        image: "/assets/images/fakenews/fake8.jpg",
        link: "/portfolio/project-summary-tool/",
      },
    ];
  }
}
