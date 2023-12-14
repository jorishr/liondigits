export function processHeaderHeight() {
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight;
  document.documentElement.style.setProperty(
    "--header-height",
    `-${headerHeight}px`
  );
}
export function processMenuHeight() {
  const menu = document.querySelector(".skill__heading__nav");
  const menuHeight = menu.offsetHeight;
  document.documentElement.style.setProperty(
    "--menu-height",
    `${menuHeight}px`
  );
}
