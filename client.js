"use strict";

const choo = require("choo"),
  app = choo(),
  home = require("./pages/home"),
  settings = require("./pages/settings"),
  account = require("./pages/account"),
  fb = require("./lib/firebase-db").init(),
  db = fb.db(),
  auth = fb.auth(),
  session = require("./lib/session").create(auth),
  storage = require("./lib/storage").create(db);

app.use(require("./models/games").create(storage));
app.use(require("./models/user").create(session));
app.route("/", home.render);
app.route("/settings", settings.render);
app.route("/account", account.render);

const tree = app.start();

document.body.appendChild(tree);
