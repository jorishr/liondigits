/*
#########################  
Copy PGP key to clipboard 
#########################  
*/
copyBtn = document.getElementById("pgp-btn-copy");
if (copyBtn) {
  copyBtn.addEventListener("click", function () {
    const str = document.getElementById("pgp-txt").textContent;
    const textArea = document.createElement("textarea");
    textArea.style.position = "absolute";
    textArea.style.top = "-9999px";
    textArea.value = str.slice(5);
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  });
}

/*
############ 
Modal Toggle 
############  
*/
//select btn
modalBtn = document.getElementsByClassName("modal-btn");
modalBtns = Array.from(modalBtn);
modalBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    modal = document.getElementsByClassName("modal")[0];
    modal.classList.toggle("modal--active");
  });
});

/*
############## 
Footer credits 
##############  
*/

footerCredits = document.getElementById("footer__credits");
currentYear = new Date().getFullYear();
if (currentYear > 2022) {
  footerCredits.textContent = `\u00A9 2022 - ${currentYear} Lion Digits | Joris Raymaekers`;
}
/*
###################  
Cal.com plugin code 
###################  
*/

(function (C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };
  let d = C.document;
  C.Cal =
    C.Cal ||
    function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () {
          p(api, arguments);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        typeof namespace === "string"
          ? (cal.ns[namespace] = api) && p(api, ar)
          : p(cal, ar);
        return;
      }
      p(cal, ar);
    };
})(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", { origin: "https://app.cal.com" });

// Important: Make sure to add `data-cal-link="liondigits/20min"` attribute to the element you want to open Cal on click
Cal("ui", {
  theme: "dark",
  styles: { branding: { brandColor: "#003F8C" } },
  hideEventTypeDetails: false,
});
