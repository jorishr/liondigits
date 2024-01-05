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

/* set layout */
processElementHeight(".header", "--height-header");
processElementHeight(".intro__highlight", "--height-highlights");
processElementHeight(".skill__heading__nav", "--height-menu");

/* set btns & btn handlers */
setHeaderMenuItems();
toggleTarget();
toggleMenu();
handleLangMenuOptions();
setCollapseBtns();

/* set text */
setAddress();
setOnionAddress();
setCompanyInfo();
setPgpInfo();
setAnchorLinks();
setTxtContent();
setFooterCredits();

/* set helpers */
clipboardCopy();

/* set consent bar fn */
consent();

/* set scroll items */
stickyNavOnScroll();
navHighlightOnScroll();
scrollIndicator();
scrollDown();
