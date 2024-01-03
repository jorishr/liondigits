import {
  langMenuToggle,
  langMenuOptions,
  setTxtContent,
} from "./modules/language.js";
import { btnClose, targetToggle } from "./modules/toggles.js";
import { clipboardCopy } from "./modules/clipboard.js";
import {
  setAnchorLinks,
  setAddress,
  setOnionAddress,
  setCompanyInfo,
  setPgpInfo,
} from "./modules/anchor.js";
import { setCollapseBtns } from "./modules/collapse.js";
import { processElementHeight } from "./modules/layout.js";
import {
  scrollIndicator,
  scrollDown,
  stickyNavOnScroll,
  navHighlightOnScroll,
} from "./modules/scroll.js";
import consent from "./modules/consent.js";
import setFooterCredits from "./modules/set-footer-credits.js";

processElementHeight(".header", "--height-header");
processElementHeight(".intro__highlight", "--height-highlights");
processElementHeight(".skill__heading__nav", "--height-menu");
langMenuToggle();
targetToggle();
btnClose();
clipboardCopy();
langMenuOptions();
setCollapseBtns();
setAddress();
setOnionAddress();
setCompanyInfo();
setPgpInfo();
setAnchorLinks();
setTxtContent();
scrollIndicator();
scrollDown();
consent();
setFooterCredits();
stickyNavOnScroll();
navHighlightOnScroll();
