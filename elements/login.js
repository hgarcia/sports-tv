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
  return html`
  <div>
  <form>
    <div>
      <label>Email</label>
      <input type="email" oninput=${onInput("email", options)} value="${options.user.email}"/>>
    </div>
    <div>
      <label>Password</label>
      <input type="password" oninput=${onInput("password", options)} value="${options.user.password}"/>>
    </div>
    <div>
      <button type="submit" onclick=${onSubmit(options)} class="btn btn-positive btn-block">Login</button>
    </div>
  </form>
</div>`;
}

module.exports = login;
