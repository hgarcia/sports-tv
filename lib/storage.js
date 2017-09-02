"use strict";

function sortGames(games) {
  return games.sort((g1, g2) => {
    if (g1.round === g2.round) {
      return g1.name.toLowerCase().localeCompare(g2.name.toLowerCase());
    }
    return g1.round - g2.round;
  });
}

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
          cb(sortGames(games || []));
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
