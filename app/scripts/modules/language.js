/*
############# 
Language menu 
#############  
*/
export function langMenuToggle() {
  const langBtn = document.getElementsByClassName("js-lang-btn")[0];
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      //toggle class menu--active
      const langMenu = document.getElementsByClassName(
        "header__right__lang-menu__options"
      )[0];
      langMenu.classList.toggle("header__right__lang-menu__options--active");
    });
  }
}
//get browser language
//set span text to browser language

//arr has multiple vals
function checkLangPref() {
  const langPrefArr = navigator.languages;
  const langOptions = ["nl", "en", "es", "ca"];
  if (langPrefArr.length < 1) {
  } else if (langPrefArr.length === 1) {
    const lang = langPrefArr[0].slice(0, 2);
    if (langOptions.includes(lang)) {
      return lang;
    } else return "";
  } else {
    for (let i = 0; i < langPrefArr.length; i++) {
      const lang = langPrefArr[i].slice(0, 2);
      if (langOptions.includes(lang)) {
        return lang;
      }
    }
    return "";
  }
}

export function setLangSpan(val = "") {
  const langSpan = document.getElementsByClassName("js-lang-span")[0];
  if (val === "") {
    const userPref = checkLangPref();
    langSpan.textContent = userPref;
  } else {
    langSpan.textContent = val;
  }
}

export function langMenuOptions() {
  const langOptions = Array.from(
    document.getElementsByClassName("js-lang-option")
  );
  langOptions.forEach((option) => {
    option.addEventListener("click", function () {
      setLangSpan(option.dataset.lang);
    });
  });
}
