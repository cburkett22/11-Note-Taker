// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var db = require("../../../../db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  // ---------------------------------------------------------------------------
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  // API POST Requests
  // POST `/api/notes` - Should receive a new note to save on the request body,
  // add it to the `db.json` file, and then return the new note to the client.
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    db.push(req.body);
    res.json(true);
  });

  // ---------------------------------------------------------------------------
  // DELETE
  app.delete("/api/notes/:id", function(req, res) {
    return res.json(db);
  });
};
