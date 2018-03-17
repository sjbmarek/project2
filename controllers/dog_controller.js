var express = require("express");

// Testing the Test file
var path = require("path");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Update for var burgerAction
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // console.log(db);
  // db.Dog.findAll({}).then(function(results){
  // 	var hbsObject = {
  // 		dogs: results
  // 	};
  // 	console.log("XXXXXXXXXXXX");
  // 	console.log(hbsObject);
  // 	res.render("index", hbsObject);
  // });
  res.sendFile(path.join(__dirname, "../public/test.html"));
});





module.exports = router;
