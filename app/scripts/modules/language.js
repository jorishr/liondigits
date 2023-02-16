import { getCookie, setCookie, formatLangStr } from "./helper";
import txt_data_nl from "./data/txt_data_nl.json";
import txt_data_en from "./data/txt_data_en.json";
import txt_data_es from "./data/txt_data_es.json";
import txt_data_ca from "./data/txt_data_ca.json";
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
  const txt_nl = txt_data_nl;
  const txt_en = txt_data_en;
  const txt_es = txt_data_es;
  const txt_ca = txt_data_ca;

  let setLang = langPref;
  if (!setLang) {
    setLang = getLangPref();
  }
  const langSrc = eval("txt_" + [setLang]);
  const txtElems = document.querySelectorAll(".txt-id");
  txtElems.forEach((elem) => {
    elem.textContent = langSrc[elem.dataset.txt_id];
  });
  setPseudoElemTxt(langSrc);
  setTitleAttributeTxt(langSrc);
  setAltAttributeTxt(langSrc);
  //setDocumentProperties(langSrc);
}

function setDocumentProperties(langObj) {
  document.documentElement.lang = langObj["document_lang"];
  document.title = langObj["document_title"];
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", langObj["document_desc"]);
}

function setPseudoElemTxt(langObj) {
  const val = langObj["pseudo_elem_001"];
  // the css variable sets the content of the pseudo element
  // this needs to be a string when computed, so we need to wrap it in quotes
  document.documentElement.style.setProperty("--pseudoTxt_001", `\"${val}\"`);
}

function setTitleAttributeTxt(langObj) {
  const elems = document.querySelectorAll("a[title], img[title]");
  elems.forEach((elem) => {
    elem.setAttribute("title", langObj[elem.dataset.txt_id__title]);
  });
}

function setAltAttributeTxt(langObj) {
  const elems = document.querySelectorAll("a[alt], img[alt]");
  elems.forEach((elem) => {
    elem.setAttribute("alt", langObj[elem.dataset.txt_id__alt]);
  });
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
