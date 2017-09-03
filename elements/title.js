// Element: navbar
//
"use strict";
const html = require("bel");

function navbar (title) {
  return html`  <header class="bar bar-nav">
    <h1 class="title">${title}</h1>
  </header>`;
}

module.exports = navbar;
