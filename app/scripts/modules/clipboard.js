import contact from "../../data/contact.json";
/*
#########################  
Copy PGP key to clipboard 
#########################  
*/
export function clipboardCopy() {
  const copyBtns = document.getElementsByClassName("js-btn-copy");
  if (copyBtns) {
    const btnsArr = Array.from(copyBtns);
    btnsArr.forEach((btn) => {
      btn.addEventListener("click", function () {
        let str = "";
        if (btn.classList.contains("js-data-long_id")) {
          str = contact.pgp_long_id;
        } else {
          str = contact.pgp_fingerprint;
        }

        const textArea = document.createElement("textarea");

        textArea.style.position = "absolute";
        textArea.style.top = "-9999px";
        textArea.value = str;
        document.body.appendChild(textArea);

        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        btn.classList.add("js-copied");
        setTimeout(function () {
          btn.classList.remove("js-copied");
        }, 2500);
      });
    });
  }
}
