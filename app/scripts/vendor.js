import { setupCalJs } from "./vendor/cal.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { typewriterEffect } from "./vendor/typewriter.js";
import { snowAnimationStart } from "snowfall-js-plugin";
import snowfallJsPluginParams from "./vendor/snowfallJsPlugin.js";

document.addEventListener("DOMContentLoaded", function () {
  typewriterEffect();
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

document.addEventListener("DOMContentLoaded", function () {
  snowAnimationStart(snowfallJsPluginParams);
});

document.addEventListener("DOMContentLoaded", function () {
  setupCalJs();
});
