import { calFn } from "./modules/cal.js";
import {
  langMenuToggle,
  setLangSpan,
  langMenuOptions,
} from "./modules/language.js";
import { modalToggle } from "./modules/modal.js";
import { clipboardCopy } from "./modules/clipboard.js";
import {
  setPrivacyAnchorLink,
  setAnchorLinks,
  setAddress,
  setCompanyInfo,
  setPgpInfo,
} from "./modules/anchor.js";
import { setCollapseBtns } from "./modules/collapse.js";
// Important: Make sure to add `data-cal-link="liondigits/20min"` attribute to the element you want to open Cal on click
calFn(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", { origin: "https://app.cal.com" });
Cal("ui", {
  theme: "dark",
  styles: { branding: { brandColor: "#003F8C" } },
  hideEventTypeDetails: false,
});

langMenuToggle();
modalToggle();
clipboardCopy();
setLangSpan();
langMenuOptions();
setPrivacyAnchorLink();
setCollapseBtns();
setAddress();
setCompanyInfo();
setPgpInfo();
setAnchorLinks();
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
