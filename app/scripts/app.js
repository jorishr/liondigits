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

document.addEventListener("DOMContentLoaded", function () {
  /* set layout */
  processElementHeight(".header", "--height-header");
  processElementHeight(".skill__heading__nav", "--height-menu");
  processElementHeight(
    ".intro__highlight__content-container",
    "--height-highlights"
  );

  /* set text */
  setTxtContent();
  setAnchorLinks();
  setCompanyInfo();
  setAddress();
  setPgpInfo();
  setOnionAddress();
  setFooterCredits();

  /* set btns & btn handlers */
  setHeaderMenuItems();
  toggleTarget();
  toggleMenu();
  handleLangMenuOptions();
  setCollapseBtns();
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
