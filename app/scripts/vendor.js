import { setupCalJs } from "./vendor/cal.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { typewriterEffect } from "./vendor/typewriter.js";
import runSnowfall from "./vendor/snowfall.js";

document.addEventListener("DOMContentLoaded", function () {
  typewriterEffect();
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

document.addEventListener("DOMContentLoaded", function () {
  runSnowfall();
});

document.addEventListener("DOMContentLoaded", function () {
  setupCalJs();
});
