var db = require("../../../../db/db.json");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    return res.json(db);
  });

  var id = 0;

  app.post("/api/notes", function(req, res) {
    id++;
    req.body.id = id;
    db.push(req.body);
    res.json(true);
  });

  app.delete("/api/notes/:id", function(req, res) {
    for (i = 0; i < db.length; i++) {
      if (db[i].id == req.body.id) {
        db.splice(i, 1);
      }
    }
    
    return res.json(db);
  });
};