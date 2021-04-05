// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var fs = require('fs');
var notes = require('../db/db.json');
var uniqid = require('uniqid');


// var data = fs.readFileSync('db.json');
// var db = JSON.parse(data);
// console.log(db);


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
// API GET Requests  
  app.get("/api/notes", (req, res) =>  res.json(notes));

 
// API POST Requests
    app.post("/api/notes", function(req, res) { 
     var newNote = req.body;
      newNote.id = uniqid();  
      notes.push(newNote);
      res.json(true);
      fs.writeFile('./db/db.json', JSON.stringify(notes), function(err) {
              if (err) return console.log(err);
                 return true});  
    })

};

