// Element: addGame
"use strict";

const html = require("bel"),
  assert = require("assert");

function onInput(prop, options) {
  return (event) => {
    options.updateGame({prop,
      value: event.target.value
    });
    event.preventDefault();
  };
}

function onSubmit(options) {
  return (event) => {
    event.preventDefault();
    if (!options.game.errors) {
      options.addGame(options.game);
    }
    return false;
  };
}

function addGame (options) {
  assert.equal(typeof options.game.name, "string", "addGame: options.game.name must be a string");
  assert.equal(typeof options.game.sport, "string", "addGame: options.game.sport must be a string");
  assert.equal(typeof options.game.round, "number", "addGame: options.game.round must be a number");
  assert.equal(typeof options.addGame, "function", "addGame: options.addGame must be a function");
  assert.equal(typeof options.updateGame, "function", "addGame: options.updateGame must be a function");

  return html`
    <div class="card-block">
      <div class="row">
        <form>
        <div class="form-group col-xs-4">
            <label for="sport" class="col-xs-5">Sport</label>
            <div class="col-xs-7">
              <input type="test" oninput=${onInput("sport", options)} step="1" min="0" class="form-control form-control-sm" name="sport" id="sport" value="${options.game.sport}">
              <span class="error ${options.game.errors && options.game.errors.sport ? "" : "hidden"}">${options.game.errors && options.game.errors.sport ? options.game.errors.name : ""}</span>
            </div>
          </div>
          <div class="form-group col-xs-4">
            <label for="name" class="col-xs-2">Name</label>
            <div class="col-xs-10">
              <input type="text" oninput=${onInput("name", options)} class="form-control form-control-sm" name="name" id="name" value="${options.game.name}">
              <span class="error ${options.game.errors && options.game.errors.name ? "" : "hidden"}">${options.game.errors && options.game.errors.name ? options.game.errors.name : ""}</span>
            </div>
          </div>
          <div class="form-group col-xs-3">
            <label for="round" class="col-xs-5">round</label>
            <div class="col-xs-7">
              <input type="number" oninput=${onInput("round", options)} step="1" min="0" class="form-control form-control-sm" name="round" id="round" value="${options.game.round}">
            </div>
          </div>
          <div class="form-group col-xs-1">
            <button type="submit" onclick=${onSubmit(options)} class="btn btn-primary btn-sm">Add</button>
          </div>
        </form>
      </div>
    </div>`;
}

module.exports = addGame;
