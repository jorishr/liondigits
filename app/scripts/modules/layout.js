/* 
  Fn gets called in app.js with (".header", "--height-header"), (".intro__highlight", "--height-highlights") and (".skill__heading__nav", "--height-menu")
*/
export function processElementHeight(targetSelector, propertyName) {
  const target = document.querySelector(`${targetSelector}`);
  if (target) {
    let heightTarget = target.offsetHeight;
    document.documentElement.style.setProperty(
      `${propertyName}`,
      `${heightTarget}px`
    );
    window.addEventListener("resize", () => {
      heightTarget = target.offsetHeight;
      document.documentElement.style.setProperty(
        `${propertyName}`,
        `${heightTarget}px`
      );
    });
  }
}

export function setHeaderMenuItems() {
  const currentPathname = window.location.pathname;
  const itemHome = document.querySelector("#js-menu-home-item");
  const itemServices = document.querySelector("#js-menu-services-item");
  switch (currentPathname) {
    case "/":
      itemHome.style.display = "none";
      break;
    case "/profile":
    case "/profile.html":
      itemServices.style.display = "none";
      break;
    default:
      break;
  }
}
