// Element: navbar
//
"use strict";
const html = require("bel");

function activeTab(tabName, active) {
  return tabName === active ? "active" : "";
}

function navbar (active) {
  return html`<nav class="bar bar-tab">
  <a class="tab-item ${activeTab("home", active)}" href="/">
    <span class="icon icon-home"></span>
    <span class="tab-label">Home</span>
  </a>
  <a class="tab-item ${activeTab("settings", active)}" href="/settings">
    <span class="icon icon-gear"></span>
    <span class="tab-label">Settings</span>
  </a>
  <a class="tab-item ${activeTab("account", active)}" href="/account">
    <span class="icon icon-person"></span>
    <span class="tab-label">Account</span>
  </a>
</nav>`;
}

module.exports = navbar;
