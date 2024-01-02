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
      let currentScroll = window.scrollY;
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
      if (window.scrollY > 0) {
        scrollDown.classList.add("hide");
      } else {
        scrollDown.classList.remove("hide");
      }
    });
  }
}

export function stickyNavOnScroll() {
  const navBar = document.querySelector(".skill__heading__nav");
  const sectionElemStart = document.querySelector("#skill-section_1");
  const sectionElemEnd = document.querySelector(".fun-zone");

  if (navBar) {
    const sectionStart = sectionElemStart.offsetTop + 150;
    const sectionEnd = sectionElemEnd.offsetTop - 150;

    window.onscroll = () => {
      let currentPos = window.scrollY;
      if (currentPos > sectionStart && currentPos < sectionEnd) {
        navBar.classList.add("skill__heading__nav__onScroll");
      } else {
        navBar.classList.remove("skill__heading__nav__onScroll");
      }
    };
  }
}

export function navHighlightOnScroll() {
  const sections = document.querySelectorAll("[id^=skill-section]");
  if (sections) {
    window.addEventListener("scroll", () => {
      let currentScrollY = window.scrollY;
      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");
        const navLink = document.querySelector(`li[id*="${sectionId}"]`);
        if (
          currentScrollY > sectionTop &&
          currentScrollY <= sectionTop + sectionHeight
        ) {
          navLink.classList.add("active");
        } else navLink.classList.remove("active");
      });
    });
  }
}
