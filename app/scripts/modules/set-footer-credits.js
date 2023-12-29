export default function setFooterCredits() {
  const footerCredits = document.getElementById("footer__credits");
  if (footerCredits) {
    const currentYear = new Date().getFullYear();
    footerCredits.innerHTML = `\u00A9 2022 &mdash; ${currentYear} Lion Digits | Joris Raymaekers`;
  }
}
