import { calFn } from "./modules/cal.js";
import {
  langMenuToggle,
  langMenuOptions,
  setTxtContent,
} from "./modules/language.js";
import { modalToggle, tooltipToggle, tooltipClose } from "./modules/toggles.js";
import { clipboardCopy } from "./modules/clipboard.js";
import {
  setPrivacyAnchorLink,
  setAnchorLinks,
  setAddress,
  setOnionAddress,
  setCompanyInfo,
  setPgpInfo,
} from "./modules/anchor.js";
import { setCollapseBtns } from "./modules/collapse.js";
import { processHeaderHeight } from "./modules/layout.js";
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
langMenuToggle();
modalToggle();
tooltipToggle();
tooltipClose();
clipboardCopy();
langMenuOptions();
setPrivacyAnchorLink();
setCollapseBtns();
setAddress();
setOnionAddress();
setCompanyInfo();
setPgpInfo();
setAnchorLinks();
setTxtContent();
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
