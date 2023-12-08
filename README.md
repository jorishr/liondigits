# Website Lion Digits

![GitHub package.json version](https://img.shields.io/github/package-json/v/jorishr/liondigits)
![node-current](https://img.shields.io/node/v/:packageName)

- [Website Lion Digits](#website-lion-digits)
  - [Description](#description)
  - [Technical details](#technical-details)
    - [HTML components](#html-components)
    - [CSS Styles](#css-styles)
    - [JavaScript](#javascript)
    - [Website-text-translator Package](#website-text-translator-package)
    - [Build task](#build-task)
    - [Versioning and changes](#versioning-and-changes)
    - [Server and deployment tasks](#server-and-deployment-tasks)

## Description

Lightweight, static and multilingual website with custom design in HTML/CSS/JS.

## Technical details

### HTML components

The PostHTML-include package is used to include and re-use (partial) HTML files into various pages. This components are start with underscore, `_header.html` for example.

### CSS Styles

Styles are written in SASS modules and compiled to CSS using the [ParcelJs](https://parceljs.org/) bundler.

A mobile first approach was used. The SASS modules are divided into components and (page)sections.

### JavaScript

The website uses JavaScript modules to perform the following tasks:

- detect the user language preference and serve the corresponding translation of the website text
- copy selected text to clipboard
- set link text, contact information and addresses
- layout helper functions to set header-height
- handle toggle buttons
- handle the [Cal](https://cal.com/) calendar widget
- scroll animations via [AOS library](https://michalsnik.github.io/aos/)

### Website-text-translator Package

The website was translated using the [website-text-translator](https://www.npmjs.com/package/website-text-translator), an open-source NPM package written by Joris Raymaekers. The packages parses the text content of any given HTML file(s) and produces JSON translation files that can be incorporated into the website with JavaScript. The package also detects changes in the HTML files and updates the JSON files accordingly. Translation strings are fetched from the Google Translate API.

Run the following command: `npx wtt help` to checkout the options. The current config can be found in `wtt.config.json`.

WTT requires Node v18 or higher.

### Build task

Use the Parcel build task via `npm run build` or ``npx parcel build app/index.html`

### Versioning and changes

See CHANGELOG for details.

### Server and deployment tasks

The website is hosted on a VPS server with Nginx and is configured to serve connection over HTTPS and the TOR Onion Network via:

- [liondigits.com](https://liondigits.com)
- [jorisraymaekers.com](jorisraymaekers.com)
- [jorisraymaekers.be](jorisraymaekers.com)
- [liondig7n77kkvnwmg4nyah3as53qi75mgbs3fiua76zmxo7krakdhid.onion](http://liondig7n77kkvnwmg4nyah3as53qi75mgbs3fiua76zmxo7krakdhid.onion) (Requires a Tor browser or Tor-compatible browser to access, such as [Tor Browser](https://www.torproject.org/download/) or [Brave Browser](https://brave.com/)).

Remember that some documents and images are served independent from the web app by the NGINX webserver and those are not part of the build and deployment process (pdf's, public keys, template images to share via socials, etc.).

The deployment bash script in this repo is meant to be executed on the server or a dedicated build server. Note that if you run it on a server with limited memory resources (1GB), the script will fail during the NPM package installation or ParcelJS Build. Use a bash script to temporarily add a swap file.
