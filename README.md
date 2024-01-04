# Website Lion Digits

![Website](https://img.shields.io/website?url=https%3A%2F%2Fliondigits.com)
![GitHub package.json version](https://img.shields.io/github/package-json/v/jorishr/liondigits)
![node-current](https://img.shields.io/node/v/website-text-translator)

- [Website Lion Digits](#website-lion-digits)
  - [Description](#description)
  - [Technical details](#technical-details)
    - [HTML components](#html-components)
    - [CSS Styles \& layout responsiveness](#css-styles--layout-responsiveness)
    - [JavaScript](#javascript)
    - [Website-text-translator Package](#website-text-translator-package)
    - [Build task](#build-task)
    - [Versioning and changes](#versioning-and-changes)
    - [Server and deployment tasks](#server-and-deployment-tasks)

## Description

Lightweight and multilingual portfolio and profile website with custom design, built with HTML, (S)CSS and vanilla JavaScript.

## Technical details

### HTML components

The PostHTML-include package is used to include and re-use partial HTML files into various pages. These components start with underscore, e.g. `_header.html`.

### CSS Styles & layout responsiveness

Styles are written in SASS modules and compiled to CSS using the [ParcelJs](https://parceljs.org/) bundler. The SASS modules are divided into [components](app/styles/modules/components/) and [(page)sections](app/styles/modules/sections/).

A mobile first approach was used when writing the styles.

Site layout has been optimized for screens with a width of minimum 320px and up to 5120px (27 inch iMac 5K). For ultra wide screens beyond that a wrapper is activated to limit the width of the page content. See [\_mixins.scss](app/styles/modules/_mixins.scss) for declaration of media-queries and other mixins like highlighting the first letter of a paragraph.

See [\_global.scss](app/styles/modules/_global.scss) for declaration of base styles, fonts and color scheme.

### JavaScript

The website uses JavaScript modules to perform the following tasks:

- detect the user language preference and serve the corresponding translation of the website text (see [language.js](app/scripts/modules/language.js))
- copy selected text to clipboard (see [clipboard.js](app/scripts/modules/clipboard.js))
- programmatically set link text, contact information and addresses (see [anchor.js](app/scripts/modules/anchor.js))
- handle GDPR consent notice bar & cookie (see [consent.js](app/scripts/modules/consent.js))
- layout helper functions for css variables like header-height and menu-height (see [layout.js](app/scripts/modules/layout.js))
- handle toggle buttons (see [toggles.js](app/scripts/modules/toggle.js))
- handle smooth modal open and close animations (see [toggles.js](app/scripts/modules/toggle.js))
- handle collapsible text content (see [collapse.js](app/scripts/modules/collapse.js))
- scroll height indicator (see [scroll.js](app/scripts/modules/scroll.js))
- sticky menu bar when scrolling through the skill section (see [scroll.js](app/scripts/modules/scroll.js))
- scroll animations via [AOS library](https://michalsnik.github.io/aos/)
- typewriter effect in hero section with the [Typewriter Effect](https://www.npmjs.com/package/typewriter-effect) library, see ([typewriter.js](app/scripts/modules/typewriter.js))
- handle the [Cal](https://cal.com/) calendar widget (see [cal.js](app/scripts/modules/cal.js))
- snow animation with Snowfall.js which runs between December 15 and February 15
- synchronized custom snow animation toggles in header menu and footer

### Website-text-translator Package

During the development process the website copy was translated using the [website-text-translator](https://www.npmjs.com/package/website-text-translator), an open-source NPM package written by Joris Raymaekers. The packages parses the text content of any given HTML file(s) and produces JSON translation files that can be incorporated into the website with JavaScript (see [language.js](app/scripts/modules/language.js)). The package also detects changes in the HTML files and updates the JSON files accordingly. Translation strings are fetched from the Google Translate API.

Run the following command: `npx wtt help` to checkout the options. The current configuration file is [wtt.config.json](wtt.config.json).

WTT requires Node version 18 or higher.

### Build task

Use the Parcel build task via `npm run build` or ``npx parcel build app/index.html`

### Versioning and changes

See CHANGELOG for details.
The release process is based on a [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) model:

- merge the new features onto the development branch (develop)
- create a new release branch (e.g. new-release/v1.1.3)
- update the [changelog](CHANGELOG.md) and versioning in [package.json](package.json); double check text copy and translation strings
- merge release branch into main
- tag main branch with latest version number
- merge release branch into development branch

### Server and deployment tasks

The website is hosted on a VPS Ubuntu server with Nginx and is configured to serve connections over HTTPS and the Tor Onion Network via:

- [liondigits.com](https://liondigits.com)
- [jorisraymaekers.com](jorisraymaekers.com)
- [jorisraymaekers.be](jorisraymaekers.com)
- [liondig7n77kkvnwmg4nyah3as53qi75mgbs3fiua76zmxo7krakdhid.onion](http://liondig7n77kkvnwmg4nyah3as53qi75mgbs3fiua76zmxo7krakdhid.onion)

The Tor onion url requires Tor-compatible browser to access. For example, [Tor Browser](https://www.torproject.org/download/) or [Brave Browser](https://brave.com/)).

Remember that some documents and images are served independent from the web app by the NGINX webserver. Those documents are _not_ part of the build and deployment process (pdf's, public keys, template images to share via socials, etc.).

The deployment bash script in this repo is meant to be executed on the server or a dedicated build server. Note that if you run it on a server with limited memory resources (1GB), the script may fail during the NPM package installation or ParcelJS Build. Use a bash script to temporarily add a swap file: [swap file setup](https://gist.github.com/jorishr/49c2062c97707daaf856d09fcf4b8d21)
