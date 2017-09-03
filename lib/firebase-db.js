"use strict";

const firebase = require("firebase");

module.exports = {
  init() {
    firebase.initializeApp({
      apiKey: "AIzaSyAhnDkaW4FlnIzQXqzVQmGxbox_Y2AfHic",
      authDomain: "sports-tv-7e937.firebaseapp.com",
      databaseURL: "https://sports-tv-7e937.firebaseio.com",
      projectId: "sports-tv-7e937",
      storageBucket: "sports-tv-7e937.appspot.com",
      messagingSenderId: "191481240481"
    });
    return {
      db() {
        return firebase.database();
      },
      auth() {
        return firebase.auth();
      }
    };
  }
  // db() {
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyAhnDkaW4FlnIzQXqzVQmGxbox_Y2AfHic",
  //     authDomain: "sports-tv-7e937.firebaseapp.com",
  //     databaseURL: "https://sports-tv-7e937.firebaseio.com",
  //     projectId: "sports-tv-7e937",
  //     storageBucket: "sports-tv-7e937.appspot.com",
  //     messagingSenderId: "191481240481"
  //   });
  // }
};
