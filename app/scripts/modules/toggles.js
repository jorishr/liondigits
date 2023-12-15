export function btnClose() {
  const btns = document.querySelectorAll(".js-btn-close");
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const parent = btn.parentElement.parentElement;
      const baseClass = parent.classList[0];
      animateClose(parent, baseClass);
    });
  });
}

// data-targets:
// 001: pgp modal; 002: expand about section; 003: btc modal
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
            window.addEventListener("click", (e) => {
              if (e.target === targetList[i]) {
                animateClose(targetList[i], baseClass);
                return;
              }
            });
            if (btn.dataset.btn_expand) {
              btn.style.display = "none";
            }
          }
        }
      });
    });
  }
}

// close with animation
function animateClose(target, baseClass) {
  target.classList.add(`${baseClass}--closing`);
  target.addEventListener(
    "animationend",
    () => {
      target.classList.remove(`${baseClass}--active`);
      target.classList.remove(`${baseClass}--closing`);
    },
    { once: true }
  );
}
