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
import { processHeaderHeight, processMenuHeight } from "./modules/layout.js";
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

processHeaderHeight();
processMenuHeight();
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
/*
############## 
Footer credits 
##############  
*/

const footerCredits = document.getElementById("footer__credits");
if (footerCredits) {
  const currentYear = new Date().getFullYear();
  if (currentYear > 2022) {
    footerCredits.textContent = `\u00A9 2022 - ${currentYear} Lion Digits | Joris Raymaekers`;
  }
}
