import { getCookie, setCookie, formatLangStr } from "./helper";
import txt_data_nl from "./data/txt_data_nl.json";
import txt_data_en from "./data/txt_data_en.json";
import txt_data_es from "./data/txt_data_es.json";
import txt_data_ca from "./data/txt_data_ca.json";
import txt_data_addendum from "./data/addendum.json";
import contactInfo from "./data/contact.json";
/*
############# 
Language menu 
#############  
*/
export function langMenuToggle() {
  const langBtn = document.getElementsByClassName("js-lang-btn")[0];
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      const langMenu = document.getElementsByClassName(
        "header__right__lang-menu__options"
      )[0];
      langMenu.classList.toggle("header__right__lang-menu__options--active");
    });
  }
}

export function langMenuOptions() {
  const langOptions = Array.from(
    document.getElementsByClassName("js-lang-option")
  );
  langOptions.forEach((option) => {
    option.addEventListener("click", function () {
      setCookie("language", option.dataset.lang);
      setTxtContent(option.dataset.lang);
    });
  });
}

/*
############################# 
Get and set document language  
#############################  
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
  txtElems.forEach((elem) => {
    const idArr = eval(elem.dataset.txt_id);
    if (elem.childNodes.length === 0) {
      elem.textContent = data[idArr[0]];
    } else {
      const textNodes = Array.from(elem.childNodes).filter(
        (node) => node.nodeType === 3 && node.textContent.trim().length > 0
      );
      for (let i = 0; i < idArr.length; i++) {
        textNodes[i].textContent = data[idArr[i]];
      }
    }
  });
  setDocumentLang(setLang);
  setLangIconTxt(setLang);
  setPseudoElemTxt(setLang);
  setEmailSubjectTxt(setLang);
  setTitleAttributeTxt(data);
  setAltAttributeTxt(data);
}

function setDocumentLang(setLang) {
  document.documentElement.lang = setLang;
}

function setLangIconTxt(setLang) {
  const langIcon = document.querySelector(".js-lang-span");
  langIcon.textContent = setLang;
}

function setPseudoElemTxt(setLang) {
  const txtData = txt_data_addendum;
  const val = txtData[setLang].pseudo_txt_copy;
  document.documentElement.style.setProperty("--pseudoTxt_001", `\"${val}\"`);
}

function setTitleAttributeTxt(data) {
  const elems = document.querySelectorAll("a[title], img[title]");
  elems.forEach((elem) => {
    elem.setAttribute("title", data[elem.dataset.txt_id__title]);
  });
}

function setAltAttributeTxt(data) {
  const elems = document.querySelectorAll("a[alt], img[alt]");
  elems.forEach((elem) => {
    elem.setAttribute("alt", data[elem.dataset.txt_id__alt]);
  });
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
  if (langCookie) {
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
