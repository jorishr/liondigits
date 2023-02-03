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
