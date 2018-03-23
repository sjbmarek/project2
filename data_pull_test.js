var express = require("express");
var mysql = require("mysql2");
var path = require("path");

var app = express();

app.use(express.static("testcode"));

var port = 3000;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "doggo_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//load page
app.get("/", function(req, res) {
 res.sendFile(path.join(__dirname, "/testcode/mike-dashboard.html"));
});

//All Dogs
app.get("/all-dogs", function(req, res) {

  connection.query("SELECT * FROM Dogs", function(err, result) {

    var html = "<h1> All Dogs </h1>";

    html += "<ul>";
    
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Dog's Name: " + result[i].dog_name + " </p>";
      // html += "<p>Owner's Name: " + result[i].owner_name + " </p>";
      // html += "<p>Location: " + result[i].location + " </p>";
      // html += "<p>Comment: " + result[i].comment + " </p>";
      // html += "<p>Photo: <img src=" + result[i].picture_link + "></img></p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});

app.get("/como", function(req, res) {


  connection.query("SELECT * FROM dogs WHERE location = 'como' ORDER BY owner_name", function(err, result) {

    var html = "<h1> Dogs At Como </h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Dog's Name: " + result[i].dog_name + " </p>";
      html += "<p>Owner's Name: " + result[i].owner_name + " </p>";
      html += "<p>Location: " + result[i].location + " </p>";
      html += "<p>Comment: " + result[i].comment + " </p>";
      html += "<p>Photo: <img src=" + result[i].picture_link + "></img></p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});

app.get("/doghouse", function(req, res) {

  connection.query("SELECT * FROM dogs WHERE location = 'doghouse' ORDER BY owner_name", function(err, result) {

    var html = "<h1> Dogs At Doghouse </h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Dog's Name: " + result[i].dog_name + " </p>";
      html += "<p>Owner's Name: " + result[i].owner_name + " </p>";
      html += "<p>Location: " + result[i].location + " </p>";
      html += "<p>Comment: " + result[i].comment + " </p>";
      html += "<p>Photo: <img src=" + result[i].picture_link + "></img></p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});

app.get("/como", function(req, res) {

  connection.query("SELECT * FROM dogs WHERE location = 'minnehaha' ORDER BY owner_name", function(err, result) {

    var html = "<h1> Dogs At Minnehaha </h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Dog's Name: " + result[i].dog_name + " </p>";
      html += "<p>Owner's Name: " + result[i].owner_name + " </p>";
      html += "<p>Location: " + result[i].location + " </p>";
      html += "<p>Comment: " + result[i].comment + " </p>";
      html += "<p>Photo: <img src=" + result[i].picture_link + "></img></p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});

app.get("/bootcamp", function(req, res) {

  connection.query("SELECT * FROM dogs WHERE location = 'bootcamp' ORDER BY owner_name", function(err, result) {

    var html = "<h1> Dogs At Bootcamp </h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Dog's Name: " + result[i].dog_name + " </p>";
      html += "<p>Owner's Name: " + result[i].owner_name + " </p>";
      html += "<p>Location: " + result[i].location + " </p>";
      html += "<p>Comment: " + result[i].comment + " </p>";
      html += "<p>Photo: <img src=" + result[i].picture_link + "></img></p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});

app.listen(port);