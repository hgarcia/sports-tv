"use strict";

const uuid = require("uuid"),
  validations = require("./validations");

function getValue(payload) {
  if (payload.prop === "round") {
    return parseInt(payload.value || 0, 10);
  }
  return payload.value;
}

function emptyGame() {
  return {
    id: "",
    sport: "",
    name: "",
    watched: false,
    round: 1,
    errors: null
  };
}

function render(bus) {
  return () => {
    bus.emit("render");
  };
}

module.exports = {
  create(storage) {
    return (state, bus) => {
      const __render = render(bus);
      state.game = emptyGame();
      state.games = [];
      bus.on("game:update", function (payload) {
        state.game[payload.prop] = getValue(payload);
        if (payload.prop === "name" || payload.prop === "sport") {
          state.game.errors = validations.game(state.game);
          __render();
        }
      });
      bus.on("game:reset", () => {
        state.game = emptyGame();
        __render();
      });
      bus.on("games:add", (data) => {
        const errors = validations.game(data);
        data.id = uuid.v4();
        if (!errors) {
          state.games.push(data);
          storage.save(data);
          __render();
        } else {
          state.game.errors = errors;
          __render();
        }
      });

      bus.on("games:load", () => {
        storage.get((games) => {
          state.games = games;
          __render();
        });
      });
      bus.on("games:modify", (data) => {
        data.game[data.prop] = data.value;
        storage.save(data.game);
        bus.emit("games:load");
      });
      bus.on("games:remove", (data) => {
        storage.removeById(data.id);
        bus.emit("games:load");
      });
    };
  }
};
