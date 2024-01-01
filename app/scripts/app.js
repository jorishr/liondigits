import { calFn } from "./modules/cal.js";
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
import { typewriterEffect } from "./modules/typewriter.js";
import consent from "./modules/consent.js";
import AOS from "aos";
import "aos/dist/aos.css";
import setFooterCredits from "./modules/set-footer-credits.js";

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
stickyNavOnScroll();
navHighlightOnScroll();
typewriterEffect();
consent();
AOS.init();
setFooterCredits();
