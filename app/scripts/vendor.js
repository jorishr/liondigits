import { setupCalJs } from "./vendor/cal.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { typewriterEffect } from "./vendor/typewriter.js";
import { snowAnimationStart } from "snowfall-js-plugin";
import snowfallJsPluginParams from "./vendor/snowfallJsPlugin.js";
import { reRenderTextElementText } from "./modules/language.js";

document.addEventListener("DOMContentLoaded", function () {
  typewriterEffect();
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

document.addEventListener("DOMContentLoaded", function () {
  snowAnimationStart(snowfallJsPluginParams);
  /* 
    The language preference check and text translation rendering happens in a different process and will have been triggered before the snow animation switches are appended to the DOM. Thus, re-render the span text element text once the snowAnimationSwitch are present in the DOM.
  */
  const switchesTextElems = document.querySelectorAll(
    ".snow-animation-switch span"
  );
  if (switchesTextElems.length > 0) {
    reRenderTextElementText(switchesTextElems);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  setupCalJs();
});
