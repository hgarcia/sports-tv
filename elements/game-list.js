// Element: gameList
//
"use strict";

const html = require("bel"),
  game = require("./game"),
  assert = require("assert");

function onLoad(options) {
  return () => {
    options.loadGames();
  };
}

function gameList(options) {
  assert.ok(Array.isArray(options.games), "gameList: options.games must be an array");
  assert.equal(typeof options.loadGames, "function", "loadGames: options.loadGames must be a function");

  return html`<table class="table" onload=${onLoad(options)}>
    <thead>
      <tr>
        <th>Sport</th>
        <th>Name</th>
        <th>Round</th>
        <th>Watched</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    ${options.games.map((s)=> {
      return game({
        show: s,
        removeGame: options.removeGame,
        changeGame: options.changeGame
      });
    })}
    </tbody>
  </table>`;
}

module.exports = gameList;
