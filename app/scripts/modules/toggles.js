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
// 001: pgp modal; 002: expand about section; 003: btc modal; 004: menu-nav
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

/* The clickable area is set by the menuToggleContainer */
export function toggleMenu() {
  const menuToggleContainer = document.querySelector(".menu-toggle__container");
  const menuToggleBtn = document.querySelector(".menu-toggle__toggle");
  const menu = document.querySelector(".menu__nav");
  menuToggleContainer.addEventListener("click", () => toggleMenu());
  menuToggleContainer.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.keyCode === 13) toggleMenu();
  });
  const toggleMenu = () => {
    if (menu.classList.contains("menu__nav--active")) {
      menu.classList.add("menu__nav--closing");
      menuToggleBtn.classList.add(`menu-toggle__toggle--closing`);
      menu.addEventListener(
        "animationend",
        () => {
          menu.classList.remove(`menu__nav--closing`);
          menu.classList.remove(`menu__nav--active`);
          menuToggleBtn.classList.remove(`menu-toggle__toggle--closing`);
          menuToggleBtn.classList.remove(`menu-toggle__toggle--active`);
        },
        { once: true }
      );
    } else {
      menu.classList.add("menu__nav--active");
      menuToggleBtn.classList.add(`menu-toggle__toggle--active`);
    }
  };
}
