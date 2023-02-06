export function setAddress() {
  const addressElems = document.querySelectorAll(".main-address");
  if (addressElems) {
    addressElems.forEach((address) => {
      const txt = `Lion Digits\r\nHulshoekstraat 48\r\n3560 Lummen\r\n(BE)`;
      address.setAttribute("style", "white-space: pre;");
      address.textContent = txt;
    });
  }
}

export function setCompanyInfo() {
  const el = document.getElementsByClassName("company-num")[0];
  if (el) {
    const txt = "BE 0781 815 149";
    el.textContent = txt;
  }
}

export function setPgpInfo() {
  const el = document.getElementById("pgp-txt");
  if (el) {
    const txt = "PGP: 08AD 0252 59CQ 316D";
    el.textContent = txt;
  }
}
