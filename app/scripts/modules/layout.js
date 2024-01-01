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
