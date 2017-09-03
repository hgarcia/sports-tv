// Element: game
//
"use strict";
const html = require("bel");

function onInput(prop, options) {
  return (event) => {
    options.updateUser({
      prop,
      value: event.target.value
    });
    event.preventDefault();
  };
}

function onSubmit(options) {
  return (event) => {
    event.preventDefault();
    if (!options.user.errors) {
      options.login(options.user);
    }
    return false;
  };
}

function login(options) {
  return html`<form>
  <input type="email" placeholder="Email" oninput=${onInput("email", options)}>
  <input type="password" placeholder="Password" oninput=${onInput("password", options)}>
  <button type="submit" onclick=${onSubmit(options)} class="btn btn-positive btn-block">Login</button>
</form>`;
}

module.exports = login;
