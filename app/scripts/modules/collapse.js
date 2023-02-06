export function setCollapseBtns() {
  const btns = document.querySelectorAll(".btn-collapse");
  if (btns) {
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        btn.classList.toggle("open");
        btn.nextElementSibling.classList.toggle("open");
      });
    });
  }
}
