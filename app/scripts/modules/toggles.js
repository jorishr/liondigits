import { getLangPref } from "./language.js";
import { data_lang_nl, data_lang_en } from "./data_lang";
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
There are 4 tooltips toggle btns on the profile page 
There is just one tooltip container on that page
This function injects the correct text into the tooltip container, based on the btn clicked and the language preference set
*/
export function tooltipToggle() {
  const btns = document.querySelectorAll(".js-tooltip-toggle");
  if (btns) {
    btns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const tooltip = document.querySelectorAll(".tooltip")[0];
        tooltip.classList.toggle("tooltip--active");
        tooltip.lastElementChild.textContent = getTooltipTxt(btn);
      });
    });
  }
}

function getTooltipTxt(btn) {
  const id = btn.dataset.tooltip_id;
  const txt_en = data_lang_en;
  const txt_nl = data_lang_nl;
  const lang = getLangPref();
  const tooltipIdStr = `tooltip_${id}`;
  console.log(tooltipIdStr);
  return eval("txt_" + [lang])[tooltipIdStr];
}
