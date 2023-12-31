export function processHeaderHeight() {
  const header = document.querySelector(".header");
  if (header) {
    let heightHeader = header.offsetHeight;
    document.documentElement.style.setProperty(
      "--height-header",
      `${heightHeader}px`
    );
    window.addEventListener("resize", () => {
      heightHeader = header.offsetHeight;
      document.documentElement.style.setProperty(
        "--height-header",
        `${heightHeader}px`
      );
    });
  }
}

export function processMenuHeight() {
  const menu = document.querySelector(".skill__heading__nav");
  if (menu) {
    const menuHeight = menu.offsetHeight;
    document.documentElement.style.setProperty(
      "--menu-height",
      `${menuHeight}px`
    );
  }
}
