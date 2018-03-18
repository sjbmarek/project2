var express = require("express");

// Testing the Test file
var path = require("path");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// index route loads test.html
// router.get("/", function (req, res) {
// res.sendFile(path.join(__dirname, "../public/test.html"));
// });
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // console.log(db);
  db.Dog.findAll({}).then(function(results) {
    // var hbsObject = {
    // 	dogs: results
    // };
    console.log("XXXXXXXXXXXX");
    // console.log(hbsObject);
    // res.render("index", hbsObject);
    //res.json(results);
    console.log(results);
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });
});

router.post("/api/newDog", function(req, res) {
  console.log("New Dog:-----------------------");
  console.log(req.body);
  db.Dog.create({
    dog_name: req.body.dogName,
    owner_name: req.body.ownerName,
    dog_comment: req.body.dogComment,
    dog_photo_url: req.body.dogPhoto
  }).then(function(results) {
    console.log("RRRRRRRRRRRRRRRR");
    console.log(results);
    // We have access to the new todo as an argument inside of the callback function
    res.json({ id: results.insertId });
    // location.reload()
  });
});

//>>>>>NOT TESTED.. NEEDS LOCATION HTML PAGE AND ROUTE<<<<<<
router.put("/api/comment/:id", function(req, res) {
  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  // var condition = "id = " + req.params.id;
  db.Dog.update(
    {
      dog_comment: req.body.dogComment
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
