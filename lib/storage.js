"use strict";

module.exports = {
  create(db) {
    return {
      get(cb) {
        const games = db.ref("games/");
        games.once("value", (data) => {
          if (!data || !data.val()) {
            cb([]);
            return;
          }
          const values = data.val(),
            games = Object.keys(values).map((k) => {
              return values[k];
            });
          cb(games || []);
        });
      },
      save(data) {
        Reflect.deleteProperty(data, "errors");
        db.ref("games/" + data.id).set(data);
      },
      removeById(id) {
        db.ref("games/" + id).remove();
      }
    };
  }
};
