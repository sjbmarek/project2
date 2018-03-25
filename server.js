var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

var routes = require("./controllers/dog_controller.js")

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

// Require handlebars helpers
var helpers = require("handlebars-helpers")();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them. UPDATE THIS
// var routes = require("./controllers/dog_controller.js");

app.use(routes);

// app.listen(PORT, function() {
//   console.log("App now listening at localhost:" + PORT);
// });

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});