import { handleLangMenuOptions, setTxtContent } from "./modules/language.js";
import { toggleTarget, toggleMenu } from "./modules/toggles.js";
import { clipboardCopy } from "./modules/clipboard.js";
import {
  setAnchorLinks,
  setAddress,
  setOnionAddress,
  setCompanyInfo,
  setPgpInfo,
} from "./modules/anchor.js";
import { setCollapseBtns } from "./modules/collapse.js";
import { processElementHeight, setHeaderMenuItems } from "./modules/layout.js";
import {
  scrollIndicator,
  scrollDown,
  stickyNavOnScroll,
  navHighlightOnScroll,
} from "./modules/scroll.js";
import consent from "./modules/consent.js";
import setFooterCredits from "./modules/set-footer-credits.js";
import lazyLoadVideos from "./modules/lazy-load.js";
import { typewriterEffect } from "./vendor/typewriter.js";
import AOS from "aos";
import "aos/dist/aos.css";

/* 
  The goal of breaking up the tasks in various eventListeners and setTimout functions is to free up the main thread as much as possible.
*/
// set layout
document.addEventListener("DOMContentLoaded", function () {
  //const start = performance.now();
  processElementHeight(".header", "--height-header");
  processElementHeight(".skill__heading__nav", "--height-menu");
  processElementHeight(
    ".intro__highlight__content-container",
    "--height-highlights"
  );
  /*   
  const end = performance.now();
  console.log("layout", end - start); 
  */
});

/* set main text */
document.addEventListener("DOMContentLoaded", function () {
  setTxtContent();
});

/* load the hero section animation */
document.addEventListener("DOMContentLoaded", function () {
  typewriterEffect();
});

/* set other element text */
document.addEventListener("DOMContentLoaded", function () {
  setAnchorLinks();
  requestIdleCallback(() => {
    setCompanyInfo();
    setAddress();
    setPgpInfo();
    setOnionAddress();
    setFooterCredits();
  });
});

/* set btns & btn handlers */
document.addEventListener("DOMContentLoaded", function () {
  setHeaderMenuItems();
  toggleTarget();
  toggleMenu();
  handleLangMenuOptions();
  setCollapseBtns();
});

/* set consent & cookie bar fn */
document.addEventListener("DOMContentLoaded", function () {
  consent();
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

stickyNavOnScroll();
navHighlightOnScroll();

requestIdleCallback(() => {
  scrollDown();
  lazyLoadVideos();
  scrollIndicator();
  clipboardCopy();
});

function loadOtherVendorScripts() {
  import("./vendor.js").catch((error) => {
    console.error("Error loading vendor script:", error);
  });
}

loadOtherVendorScripts();
