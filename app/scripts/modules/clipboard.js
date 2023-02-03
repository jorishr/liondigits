/*
#########################  
Copy PGP key to clipboard 
#########################  
*/
export function clipboardCopy() {
  const copyBtn = document.getElementById("pgp-btn-copy");
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
}
