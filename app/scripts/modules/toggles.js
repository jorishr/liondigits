/*
############ 
Modal Toggle 
############  
*/
export function modalToggle() {
  const modalBtn = document.getElementsByClassName("modal-btn");
  const modalBtns = Array.from(modalBtn);
  modalBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const modal = document.getElementsByClassName("modal")[0];
      modal.classList.toggle("modal--active");
    });
  });
}

/*
###############
Tooltip Toggles 
###############
*/
export function tooltipToggle() {
  const btns = document.querySelectorAll(".js-tooltip-toggle");
  if (btns) {
    btns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const num = btn.dataset.tooltip_id.slice(2);
        const tooltip = document.querySelectorAll(".tooltip")[num - 1];
        tooltip.classList.toggle("tooltip--active");
      });
    });
  }
}

export function tooltipClose() {
  const btns = document.querySelectorAll(".js-tooltip-close");
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tooltip = btn.parentElement;
      tooltip.classList.remove("tooltip--active");
    });
  });
}
