/*
#########################  
Copy PGP key to clipboard 
#########################  
*/
export function clipboardCopy() {
  const copyBtn = document.getElementsByClassName("js-pgp-btn-copy")[0];
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

      copyBtn.classList.add("js-copied");
      setTimeout(function () {
        copyBtn.classList.remove("js-copied");
      }, 2000);
    });
  }
}
