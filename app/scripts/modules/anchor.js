export function setPrivacyAnchorLink() {
  const anchor = document.getElementsByClassName("anchor-link__privacy")[0];
  if (anchor) {
    const messageSubject = encodeURI("Vraag over privacy");
    const messageBody = encodeURI(
      "Beste,\n\nIk heb een vraag over het privacy policy van jullie website."
    );
    const email = "info@liondigits.com";
    const message = `mailto:${email}?subject=${messageSubject}&body=${messageBody}`;
    anchor.setAttribute("href", message);
  }
}
