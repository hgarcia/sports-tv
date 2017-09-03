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
  },
  user: (data) => {
    const constraints = {
      email: {
        presence: true
      },
      password: {
        presence: true
      }
    };
    return validate(data, constraints);
  }
};
