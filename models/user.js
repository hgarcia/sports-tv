"use strict";

const validations = require("./validations");

function emptyUser() {
  return {
    email: "",
    password: "",
    errors: null
  };
}

function render(bus) {
  return () => {
    bus.emit("render");
  };
}

module.exports = {
  create(session) {
    return (state, bus) => {
      const __render = render(bus);
      state.user = emptyUser();
      bus.on("user:update", (payload) => {
        state.user[payload.prop] = payload.value;
        state.user.errors = validations.user(state.user);
        __render();
      });
      bus.on("user:reset", () => {
        state.user = emptyUser();
        __render();
      });
      bus.on("user:signin", () => {
        session.signin(state.user);
      });
    };
  }
};
