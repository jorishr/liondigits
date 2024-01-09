import { calFn } from "./vendor/cal.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { typewriterEffect } from "./vendor/typewriter.js";
import runSnowfall from "./vendor/snowfall.js";

function setupCalJs() {
  // Important: Make sure to add `data-cal-link="liondigits/20min"` attribute to the element you want to open Cal on click
  try {
    calFn(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", { origin: "https://app.cal.com" });
    Cal("ui", {
      theme: "dark",
      styles: { branding: { brandColor: "#003F8C" } },
      hideEventTypeDetails: false,
    });
  } catch (e) {
    console.log("Calendar unable to loaded");
  }
}

typewriterEffect();
AOS.init();

setTimeout(function () {
  runSnowfall();
}, 1050);

setTimeout(function () {
  /* unlikely people will interact with this immediately*/
  setupCalJs();
}, 1000);
