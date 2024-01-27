import { getCookie, setCookie, formatLangStr } from "./helper";
import txt_data_nl from "../../data/txt_data_nl.json";
import txt_data_en from "../../data/txt_data_en.json";
import txt_data_es from "../../data/txt_data_es.json";
import txt_data_ca from "../../data/txt_data_ca.json";
import txt_data_addendum from "../../data/addendum.json";
import contactInfo from "../../data/contact.json";
import { animateClose } from "./helper";

export const languageData = {
  nl: txt_data_nl,
  en: txt_data_en,
  es: txt_data_es,
  ca: txt_data_ca,
};

export function handleLangMenuOptions() {
  const langOptions = document.querySelectorAll(".language__option");
  const langMenu = document.querySelector(".language");
  langOptions.forEach((option) => {
    option.addEventListener("click", function () {
      setTxtContent(option.dataset.lang);
      setCookie("language", option.dataset.lang);
      animateClose(langMenu, "language");
    });
  });
}

/*
############################# 
Get and set document language  
#############################
- setTimeout additions are for performance considerations, to free up the main thread and minimize blocking
*/
export function setTxtContent(langPref) {
  const setLang = langPref || getLangPref();
  const data = languageData[setLang];
  const txtElems = document.querySelectorAll("[data-txt_id]");
  setTimeout(() => {
    setTextElems(txtElems, data);
  }, 0);
  setDocumentLang(setLang);
  setLangIconTxt(setLang);
  setPseudoElemTxt(setLang, "pseudo_txt_copy");
  setEmailSubjectTxt(setLang);
  setTimeout(() => {
    setAttributeTxt(data, "title");
  }, 0);
  setTimeout(() => {
    setAttributeTxt(data, "alt");
  }, 0);
  setAttributeTxt(data, "placeholder");
  setAttributeTxt(data, "meta");
}

function setTextElems(txtElems, data) {
  txtElems.forEach((elem) => {
    const idArr = JSON.parse(elem.dataset.txt_id);
    if (elem.childNodes.length === 0) {
      elem.textContent = data[idArr[0]];
    } else {
      const textNodes = Array.from(elem.childNodes).filter(
        (node) => node.nodeType === 3 && node.textContent.trim().length
      );
      for (let i = 0; i < idArr.length; i++) {
        textNodes[i].textContent = data[idArr[i]];
      }
    }
  });
}

export function reRenderTextElementText(txtElems) {
  const setLang = getLangPref();
  const data = languageData[setLang];
  setTextElems(txtElems, data);
}

function setAttributeTxt(data, target) {
  const elems = document.querySelectorAll(`[data-txt_id__${target}]`);
  let name = target;
  if (target === "meta") name = "content";
  elems.forEach((elem) => {
    elem.setAttribute(name, data[elem.dataset[`txt_id__${target}`]]);
  });
}

function setDocumentLang(setLang) {
  document.documentElement.lang = setLang;
}

function setLangIconTxt(setLang) {
  const langIcon = document.querySelector(".js-lang-span");
  langIcon.textContent = setLang;
}

function setPseudoElemTxt(setLang, target) {
  const txtData = txt_data_addendum;
  const val = txtData[setLang][target];
  document.documentElement.style.setProperty(`--${target}`, `\"${val}\"`);
}

function setEmailSubjectTxt(setLang) {
  const anchor = document.querySelector(".js-anchor-link__privacy");
  if (anchor) {
    const txtData = txt_data_addendum;
    const subject = txtData[setLang].email_privacy.subject;
    const body = txtData[setLang].email_privacy.body;

    const message = `mailto:${contactInfo.email_info}?subject=${encodeURI(
      subject
    )}&body=${encodeURI(body)}`;
    anchor.setAttribute("href", message);
  }
}

export function getLangPref() {
  const langCookieVal = getCookie("language");
  const validOptions = ["nl", "en", "es", "ca"];
  let preferredLang;

  if (langCookieVal && validOptions.includes(langCookieVal)) {
    preferredLang = langCookieVal;
  } else {
    preferredLang = getBrowserLangPref();
    setCookie("language", preferredLang);
  }

  return preferredLang;
}

function getBrowserLangPref() {
  const browserLangs = navigator.languages;
  const validOptions = ["nl", "en", "es", "ca"];
  const defaultOption = "nl";
  for (let i = 0; i < browserLangs.length; i++) {
    const lang = formatLangStr(browserLangs[i]);
    if (validOptions.includes(lang)) {
      return lang;
    }
  }
  return defaultOption;
}
