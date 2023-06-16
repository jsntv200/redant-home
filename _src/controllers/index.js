import { Application } from "@hotwired/stimulus";
window.Stimulus = Application.start();

import Reveal from "stimulus-reveal-controller";
Stimulus.register("reveal", Reveal);

import ReadMore from 'stimulus-read-more';
Stimulus.register("read-more", ReadMore);

import { AosController } from "./aos-controller";
Stimulus.register("aos", AosController);

import { AssessmentController } from "./assessment-controller";
Stimulus.register("assessment", AssessmentController);

import { Carousel } from "./carousel-controller";
Stimulus.register("carousel", Carousel);

import { FakeNewsController } from "./fake-news-controller";
Stimulus.register("fake-news", FakeNewsController);

import { Image } from "./image-controller";
Stimulus.register("image", Image);

import { NormaliseHeightController } from "./normalise-height-controller";
Stimulus.register("normalise-height", NormaliseHeightController);

import { MacyController } from "./macy-controller";
Stimulus.register("macy", MacyController);

import { ModalCarouselController } from "./modal-carousel-controller";
Stimulus.register("modal-carousel", ModalCarouselController);

import { NavController } from "./nav-controller";
Stimulus.register("nav", NavController);

import { RandomiseController } from "./randomise-controller";
Stimulus.register("randomise", RandomiseController);

import { RellaxController } from "./rellax-controller";
Stimulus.register("rellax", RellaxController);

import { TypewriterController } from "./typewriter-controller";
Stimulus.register("typewriter", TypewriterController);

import { TypewriterWordController } from "./typewriter-word-controller";
Stimulus.register("typewriter-word", TypewriterWordController);
