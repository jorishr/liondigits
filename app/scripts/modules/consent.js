import { getCookie, setCookie } from "./helper";

export default () => {
  const hasConsent = getCookie("consent");
  const consentBar = document.querySelector(".consent");
  const consentBtn = document.querySelector(".js-btn-consent");

  hasConsent
    ? consentBar.classList.remove("consent--active")
    : consentBtn.addEventListener(
        "click",
        () => {
          setCookie("consent", "true");
          consentBar.classList.remove("consent--active");
        },
        { once: true }
      );
};
