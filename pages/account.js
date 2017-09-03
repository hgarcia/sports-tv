"use strict";

const html = require("choo/html"),
  navBar = require("../elements/navbar"),
  login = require("../elements/login"),
  title = require("../elements/title");

function _getLoginParams(state, emit) {
  return {
    user: state.user,
    login: (data) => {
      emit("user:login", data);
      emit("user:reset");
    },
    updateUser: (data) => {
      emit("user:update", data);
    }
  };
}

module.exports = {
  render(state, emit) {
    return html`
      <main>
      ${title("Account")}
      ${navBar("account")}
      <div class="content">
      ${login(_getLoginParams(state, emit))}
      </div>
      </main>`;
  }
};
