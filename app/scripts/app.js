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

/* 
  The goal of breaking up the tasks in various eventListeners and setTimout functions is to free up the main thread as much as possible.
*/
// set layout
document.addEventListener("DOMContentLoaded", function () {
  //const start = performance.now();
  processElementHeight(".header", "--height-header");

  setTimeout(() => {
    processElementHeight(".skill__heading__nav", "--height-menu");
  }, 0);

  setTimeout(() => {
    processElementHeight(
      ".intro__highlight__content-container",
      "--height-highlights"
    );
  }, 0);
  /*   
  const end = performance.now();
  console.log("layout", end - start); 
  */
});

/* set main text */
document.addEventListener("DOMContentLoaded", function () {
  setTxtContent();
});

/* set other element text */
document.addEventListener("DOMContentLoaded", function () {
  setAnchorLinks();
  setTimeout(() => {
    setCompanyInfo();
    setAddress();
    setPgpInfo();
    setOnionAddress();
    setFooterCredits();
  }, 0);
});

/* set btns & btn handlers */
document.addEventListener("DOMContentLoaded", function () {
  setHeaderMenuItems();
  toggleTarget();
  toggleMenu();
  handleLangMenuOptions();
  setCollapseBtns();
});

document.addEventListener("DOMContentLoaded", function () {
  lazyLoadVideos();
});

/* set helpers */
clipboardCopy();

/* set consent & cookie bar fn */
consent();

/* set scroll items */
stickyNavOnScroll();
navHighlightOnScroll();
scrollIndicator();
scrollDown();
