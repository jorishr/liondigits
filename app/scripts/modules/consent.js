import { getCookie, setCookie } from "./helper";

export default () => {
  const consent = getCookie("consent");
  if (consent) {
    const consentBanner = document.querySelector(".consent");
    if (consentBanner) {
      consentBanner.classList.remove("consent--active");
    }
  } else {
    const consentBtn = document.querySelector(".js-btn-consent");
    if (consentBtn) {
      consentBtn.addEventListener("click", () => {
        setCookie("consent", "true");
      });
    }
  }
};
