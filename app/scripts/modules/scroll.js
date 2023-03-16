import { throttle } from "./helper.js";

export function scrollIndicator() {
  const scrollIndicator = document.querySelector(".scroll-indicator");
  const scrollIndicatorBg = document.querySelector(".scroll-indicator__bg");

  if (!scrollIndicator) return;

  scrollIndicator.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  window.addEventListener(
    "scroll",
    throttle(() => {
      let windowHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      let currentScroll = window.pageYOffset;
      let scrollHeightPercent = Math.ceil(
        (currentScroll / windowHeight) * 100 + 6
      );
      if (scrollHeightPercent >= 10) {
        scrollIndicator.classList.add("reveal");
        scrollIndicatorBg.style.height = `${scrollHeightPercent}%`;
      } else {
        scrollIndicator.classList.remove("reveal");
      }
    }, 50)
  );
}

export function scrollDown() {
  const scrollDown = document.querySelector(".scroll-down");
  if (scrollDown) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        scrollDown.classList.add("hide");
      } else {
        scrollDown.classList.remove("hide");
      }
    });
  }
}
