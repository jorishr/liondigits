import { getCookie, setCookie, formatLangStr } from "./helper";
import txt_data_nl from "../../data/txt_data_nl.json";
import txt_data_en from "../../data/txt_data_en.json";
import txt_data_es from "../../data/txt_data_es.json";
import txt_data_ca from "../../data/txt_data_ca.json";
import txt_data_addendum from "../../data/addendum.json";
import contactInfo from "../../data/contact.json";
import { animateClose } from "./helper";

export function handleLangMenuOptions() {
  const langOptions = Array.from(
    document.querySelectorAll(".language__option")
  );
  const langMenu = document.querySelector(".language");
  langOptions.forEach((option) => {
    option.addEventListener("click", function () {
      setCookie("language", option.dataset.lang);
      setTimeout(() => {
        setTxtContent(option.dataset.lang);
      }, 0);
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
  // Import language data
  const txt_nl = txt_data_nl;
  const txt_en = txt_data_en;
  const txt_es = txt_data_es;
  const txt_ca = txt_data_ca;

  let setLang = langPref;
  if (!setLang) {
    setLang = getLangPref();
  }
  const data = eval("txt_" + [setLang]);
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
    const idArr = eval(elem.dataset.txt_id);
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
  const txt_nl = txt_data_nl;
  const txt_en = txt_data_en;
  const txt_es = txt_data_es;
  const txt_ca = txt_data_ca;
  const setLang = getLangPref();
  const data = eval("txt_" + [setLang]);
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
  const anchor = document.getElementsByClassName("js-anchor-link__privacy")[0];
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
  const langCookie = getCookie("language");
  const isValid =
    langCookie === "nl" ||
    langCookie === "en" ||
    langCookie === "es" ||
    langCookie === "ca";
  if (langCookie && isValid) {
    return langCookie;
  }
  if (!langCookie) {
    const browserLang = getBrowserLangPref();
    setCookie("language", browserLang);
    return browserLang;
  }
  const langDefault = "nl";
  return langDefault;
}

function getBrowserLangPref() {
  const browserLangs = navigator.languages;
  const langSupportedOptions = ["nl", "en", "es", "ca"];
  const langDefault = "nl";
  if (browserLangs.length < 1) {
    return langDefault;
  } else {
    for (let i = 0; i < browserLangs.length; i++) {
      const lang = formatLangStr(browserLangs[i]);
      if (langSupportedOptions.includes(lang)) {
        return lang;
      } else return langDefault;
    }
  }
}
