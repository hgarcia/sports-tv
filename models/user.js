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
  create(auth) {
    return (state, bus) => {
      const __render = render(bus);
      state.user = emptyUser();
      bus.on("user:update", (payload) => {
        state.user[payload.prop] = payload.value;
        state.user.errors = validations.user(state.user);
        __render();
      });
      bus.on("user:signup", () => {
        auth
          .createUserWithEmailAndPassword(state.user.email, state.user.password)
          .then((u) => {
            console.log("signup:", u);
          })
          .catch((error) => {
            console.log("signup error", error);
          });
      });
      bus.on("user:signin", () => {
        auth()
          .signInWithEmailAndPassword(state.user.email, state.user.password)
          .then((u) => {
            console.log("singin:", u);
          })
          .catch(function (error) {
            console.log("signin error", error);
          });
      });
      bus.on("user:signout", () => {
        auth()
          .signOut()
          .then((s) => {
            console.log("signout:", s);
          })
          .catch((error) => {
            console.log("signout error", error);
          });
      });
    };
  }
};
