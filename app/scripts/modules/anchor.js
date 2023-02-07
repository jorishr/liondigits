const contactInfo = {
  address: `Lion Digits\r\nHulshoekstraat 48\r\n3560 Lummen\r\n(BE)`,
  company_num: "BE 0781 815 149",
  pgp: "08AD 0252 59CQ 316D",
  email_jr: "joris@liondigits.com",
  email_info: "info@liondigits.com",
  tel_be: "+32468578564",
  tel_es: "+34665234503",
  signal: "https://signal.me/#p/+32468578564",
  whatsapp: "https://wa.me/32468578564",
  skype: "joris.raymaekers?call",
  github: "https://github.com/jorishr",
  codepen: "https://codepen.io/jorishr",
  twitter: "https://twitter.com/liondigits",
  linkedin: "https://www.linkedin.com/company/lion-digits",
};

export function setAnchorLinks() {
  const links = document.getElementsByClassName("js-social-link");
  const linksArray = Array.from(links);
  linksArray.forEach((link) => {
    link.setAttribute("href", getLinkData(link));
  });
}

function getLinkData(link) {
  switch (link.dataset.link) {
    case "email_jr":
      return `mailto:${contactInfo.email_jr}`;
    case "email_info":
      return `mailto:${contactInfo.email_info}`;
    case "tel_be":
      return `tel:${contactInfo.tel_be}`;
    case "tel_es":
      return `tel:${contactInfo.tel_es}`;
    case "signal":
      return `${contactInfo.signal}`;
    case "whatsapp":
      return `${contactInfo.whatsapp}`;
    case "skype":
      return `skype:${contactInfo.skype}`;
    case "github":
      return `${contactInfo.github}`;
    case "codepen":
      return `${contactInfo.codepen}`;
  }
}

export function setPrivacyAnchorLink() {
  const anchor = document.getElementsByClassName("anchor-link__privacy")[0];
  if (anchor) {
    const messageSubject = encodeURI("Vraag over privacy");
    const messageBody = encodeURI(
      "Beste,\n\nIk heb een vraag over het privacy policy van jullie website."
    );
    const message = `mailto:${contactInfo.email_info}?subject=${messageSubject}&body=${messageBody}`;
    anchor.setAttribute("href", message);
  }
}

export function setAddress() {
  const addressElems = document.querySelectorAll(".main-address");
  if (addressElems) {
    addressElems.forEach((address) => {
      address.setAttribute("style", "white-space: pre;");
      address.textContent = contactInfo.address;
    });
  }
}

export function setCompanyInfo() {
  const el = document.getElementsByClassName("company-num")[0];
  if (el) {
    el.textContent = contactInfo.company_num;
  }
}

export function setPgpInfo() {
  const el = document.getElementById("pgp-txt");
  if (el) {
    el.textContent = `PGP: ${contactInfo.pgp}`;
  }
}
