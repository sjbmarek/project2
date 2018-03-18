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
 
    // db.Dog.findAll({
    //   where: {
    //     park_at: {
    //       [Op.ne]: "Doghouse"
    //     },
    //     updatedAt: {
    //       [Op.lt]: new Date(),
    //       [Op.gt]: new Date(new Date() - 2 * 60 * 60 * 1000)
    //       // [Op.gt]: Math.abs(parseInt(new Date().slice(16,18)) - parseInt(db.Dog.updatedAt.slice(11,13)))
    //     }
    //   }
    // }).then(function (results) {
    //   db.Dog.update({
    //     park_at: "Doghouse"
    //   })
    //   console.log("am back home");
    //   console.log(results);
    // });


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
    console.log("this is the ID");
    console.log(results.id);
    dogId = results.id;
    console.log(dogId);
    // location.reload()
  });
});

//>>>>>NOT TESTED.. NEEDS COMMENT HTML PAGE AND ROUTE<<<<<<
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
        id: dogId
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

// Route to Como Park
router.put("/api/como/:id", function(req, res) {
  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  // var condition = "id = " + req.params.id;\
  console.log("This is ID in router" + dogId);
  db.Dog.update(
    {
      park_at: req.body.parkName,
    },
    {
      where: {
        id: dogId
      }
    }
  ).then(function(result) {
    db.Dog.increment("como_visits", { where: { id: dogId } });


    db.Dog.sum('como_visits').then(function (resultA) {
      db.Park.update({
        total_park_visits: resultA
      }, {
          where: {
            id: 1
          },
        });
    });


    if (result.changedRows == 0) {
      console.log("we are here!!1")
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Route to Minnehaha Park
router.put("/api/minnehaha/:id", function (req, res) {
  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  // var condition = "id = " + req.params.id;\
  console.log("This is ID in router" + dogId);
  db.Dog.update(
    {
      park_at: req.body.parkName,
    },
    {
      where: {
        id: dogId
      }
    }
  ).then(function (result) {
    db.Dog.increment("minnehaha_visits", { where: { id: dogId } });

    db.Dog.sum('minnehaha_visits').then(function (resultA) {
      db.Park.update({
        total_park_visits: resultA
      }, {
          where: {
            id: 2
          },
        });
    });

    if (result.changedRows == 0) {
      console.log("we are here!!1")
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


//Route to bootcamp
router.put("/api/bootcamp/:id", function (req, res) {
  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  // var condition = "id = " + req.params.id;\
  console.log("This is ID in router" + dogId);
  db.Dog.update(
    {
      park_at: req.body.parkName,
    },
    {
      where: {
        id: dogId
      }
    }
  ).then(function (result) {
    db.Dog.increment("bootcamp_visits", { where: { id: dogId } });

    db.Dog.sum('bootcamp_visits').then(function (resultA) {
      db.Park.update({
        total_park_visits: resultA
      }, {
          where: {
            id: 3
          },
        });
    });

    if (result.changedRows == 0) {
      console.log("we are here!!1")
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Route to Dog house
router.put("/api/doghouse/:id", function (req, res) {
  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  // var condition = "id = " + req.params.id;\
  console.log("This is ID in router" + dogId);
  db.Dog.update(
    {
      park_at: req.body.parkName,
    },
    {
      where: {
        id: dogId
      }
    }
  ).then(function (result) {
    if (result.changedRows == 0) {
      console.log("we are here!!1")
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



//Time limit to get kicked out
// db.Dog.findAll({
//   where: {
//     park_at: {
//       [Op.ne]: "Doghouse"
//     },
//     updatedAt: {
//       [Op.lt]: new Date(),
//       [Op.gt]: new Date(new Date() - 2 * 60 * 60 * 1000)
//       // [Op.gt]: Math.abs(parseInt(new Date().slice(16,18)) - parseInt(db.Dog.updatedAt.slice(11,13)))
//     }
//   }
// }).then(function (results) {
//    db.Dog.update({
//      park_at: "Doghouse"
//    })
//   console.log("am back home");
//   console.log(results);
// });




module.exports = router;
