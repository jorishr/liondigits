import { getCookie, setCookie } from "./helper";

export default () => {
  const consent = getCookie("consent");
  if (consent) {
    const consentElement = document.querySelector(".consent");
    consentElement.classList.remove("consent--active");
  } else {
    const consentBtn = document.querySelector(".js-btn-consent");
    if (consentBtn) {
      consentBtn.addEventListener("click", () => {
        setCookie("consent", "true");
      });
    }
  }
};
