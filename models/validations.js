"use strict";
const validate = require("validate.js");

module.exports = {
  game: (data) => {
    const constraints = {
      name: {
        presence: true
      },
      sport: {
        presence: true
      }
    };
    return validate(data, constraints);
  }
};
