"use strict";

const html = require("choo/html"),
  navBar = require("../elements/navbar"),
  addGame = require("../elements/add-game"),
  gameList = require("../elements/game-list");

function _getAddGameParams(state, emit) {
  return {
    game: state.game,
    addGame: (data) => {
      emit("games:add", data);
      emit("game:reset");
    },
    updateGame: (data) => {
      emit("game:update", data);
    }
  };
}

function _getGameListParams(state, emit) {
  return {
    games: state.games,
    changeGame: (data) => {
      emit("games:modify", data);
    },
    loadGames: () => {
      emit("games:load");
    },
    removeGame: (game) => {
      emit("games:remove", game);
    }
  };
}

module.exports = {
  getAddGameParams: _getAddGameParams,
  getGameListParams: _getGameListParams,
  render(state, emit) {
    return html`
      <main>
      ${navBar()}
      <div class="container">
      ${addGame(_getAddGameParams(state, emit))}
      ${gameList(_getGameListParams(state, emit))}
      </div>
      </main>`;
  }
};
