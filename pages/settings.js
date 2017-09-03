"use strict";

const html = require("choo/html"),
  navBar = require("../elements/navbar"),
  title = require("../elements/title");

module.exports = {
  render(state, emit) {
    return html`
      <main>
      ${title("Settings")}
      ${navBar("settings")}
      <div class="content">
      In the settings page.
      </div>
      </main>`;
  }
};
