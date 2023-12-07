export function btnClose() {
  const btns = document.querySelectorAll(".js-btn-close");
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const parent = btn.parentElement;
      const baseClass = parent.classList[0];
      parent.classList.remove(`${baseClass}--active`);
    });
  });
}

export function targetToggle() {
  const btns = document.querySelectorAll(".js-target-toggle");
  if (btns) {
    btns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const targetId = btn.dataset.target;
        const targetList = document.querySelectorAll(`[data-target_id]`);
        for (let i = 0; i < targetList.length; i++) {
          if (targetList[i].dataset.target_id === targetId) {
            const baseClass = targetList[i].classList[0];
            targetList[i].classList.toggle(`${baseClass}--active`);
            if (btn.dataset.btn_expand) {
              btn.style.display = "none";
            }
          }
        }
      });
    });
  }
}
