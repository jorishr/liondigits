/*  
  - Data-target names: data targets should be named after the principal class name of the element that is targeted — followed by a "-" and an identifier, 
  e.g. modal-pgp, modal-btc, expand-about, tooltip-100
  - These classes should have --active and --closing modifiers classes defined in their respective styles, see animateClose in ./helper.js
  - The toggles have data attributes "data-target"
  - The targets have data attributes "data-target_id"
  - These attribute values should match
 */
import { animateClose } from "./helper";

export function toggleTarget() {
  const toggles = [...document.querySelectorAll(".js-target-toggle")];
  if (toggles.length > 0) {
    processToggles();
  } else return;

  function processToggles() {
    toggles.forEach((toggle) => {
      const toggleTarget = document.querySelector(
        `[data-target_id="${toggle.dataset.target}"]`
      );
      const toggleTargetClass = toggle.dataset.target.split("-")[0];

      handleElementEvents(
        toggle,
        handleToggleTarget,
        toggle,
        toggleTarget,
        toggleTargetClass
      );
    });
    /*  
        handleToggleTarget performs three actions: 
        - activate the target element
        - setup the handlers to de-activate/close the target element
        - closing the target can be done in two ways: clicking outside of the target element content area or clicking the close button
        - perform an additional action 
      */
    function handleToggleTarget(toggle, toggleTarget, toggleTargetClass) {
      const closeBtn = toggleTarget.querySelector(".js-btn-close");
      toggleTarget.classList.toggle(`${toggleTargetClass}--active`);

      window.addEventListener("click", (e) => {
        if (e.target === toggleTarget) {
          animateClose(toggleTarget, toggleTargetClass);
          return;
        }
      });
      if (closeBtn) {
        handleElementEvents(
          closeBtn,
          animateClose,
          toggleTarget,
          toggleTargetClass
        );
      }

      /*       
          Additional action: expand btn is an exception that is only 
          shown once until clicked
        */
      if (toggleTarget.dataset.target_id === "expand-about") {
        toggle.style.display = "none";
      }
    }
  }
}

function handleElementEvents(element, handler, ...args) {
  element.addEventListener("click", (e) => {
    if (args) {
      handler(...args);
    } else handler();
  });
  element.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      if (args) {
        handler(...args);
      } else handler();
    }
  });
}
/* 
  - The clickable area is set by the menuToggleContainer 
  - The logic similar to the toggleTarget() function and animateClose but there are substantial differences, hence a separate function.
*/
export function toggleMenu() {
  const menuToggleContainer = document.querySelector(".menu-toggle__container");
  const menuToggleBtn = document.querySelector(".menu-toggle__toggle");
  const menu = document.querySelector(".menu");

  handleElementEvents(menuToggleContainer, handleToggle);

  function handleToggle() {
    if (menu.classList.contains("menu--active")) {
      menu.classList.add("menu--closing");
      menuToggleBtn.classList.add(`menu-toggle__toggle--closing`);
      menu.addEventListener(
        "animationend",
        () => {
          menu.classList.remove(`menu--closing`);
          menu.classList.remove(`menu--active`);
          menuToggleBtn.classList.remove(`menu-toggle__toggle--closing`);
          menuToggleBtn.classList.remove(`menu-toggle__toggle--active`);
        },
        { once: true }
      );
    } else {
      menu.classList.add("menu--active");
      menuToggleBtn.classList.add(`menu-toggle__toggle--active`);
    }
  }
}
