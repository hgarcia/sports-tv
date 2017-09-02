// Element: game
//
"use strict";
const html = require("bel"),
  assert = require("assert");

function onDelete(options) {
  return (e) => {
    e.preventDefault();
    options.removeGame(options.game);
    return false;
  };
}

function onWatched(options) {
  return (e) => {
    e.preventDefault();
    options.changeGame({game: options.game, prop: "watched", value: !options.watched });
    return false;
  };
}

function game(options) {
  assert.equal(typeof options.game.sport, "string", "game: options.game.sport must be a string");
  assert.equal(typeof options.game.name, "string", "game: options.game.name must be a string");
  assert.equal(typeof options.game.round, "number", "game: options.game.round must be a number");
  assert.equal(typeof options.game.watched, "boolean", "game: options.game.watched must be a boolean");

  return html`<tr>
    <td class="wide">${options.game.sport}</td>
    <td class="wide">${options.game.name}</td>
    <td class="wide">${options.game.round}</td>
    <td class="wide">${options.game.watched}</td>
    <td class="narrow"><a href="#" class="btn btn-sm" onclick=${onWatched(options)}>[watch/unwatch]</a></td>
    <td class="narrow"><a href="#" onclick=${onDelete(options)}>[delete]</a>
  </tr>`;
}

module.exports = game;
