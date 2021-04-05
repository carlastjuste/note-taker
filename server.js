var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var fs = require('fs');
var db = fs.readFileSync('./db/db.json');
var notes = JSON.parse(db);
console.log(notes);


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);




app.listen(PORT, listening);

function listening() {
    console.log("App listening on PORT: " + PORT);
}
