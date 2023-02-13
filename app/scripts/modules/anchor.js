import { contactInfo } from "./data_contact.js";

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
    case "url":
      return `${contactInfo.url}`;
    case "onion":
      return `${contactInfo.onion}`;
  }
}

export function setPrivacyAnchorLink() {
  const anchor = document.getElementsByClassName("js-anchor-link__privacy")[0];
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

export function setOnionAddress() {
  const links = document.querySelectorAll(".js-onion-link");
  if (links) {
    links.forEach((link) => {
      link.textContent = contactInfo.onion.slice(7);
    });
  }
}
