const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));


// ================================================================================
// ROUTER
// ================================================================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);




//Listener
app.listen(PORT, listening);

function listening() {
    console.log("App listening on PORT: " + PORT);
}
