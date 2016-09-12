var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

//server test
// app.get('/', function(req, res){
//   res.send("Hello world from server.js")
// });

//use an html page as the template
app.use(express.static(__dirname + "/public"));

//listen for GET request
app.get('/contactlist', function (req, res){
  console.log("I received a GET request");

  //get request from mongodb-db
  db.contactlist.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });
});

app.listen(3000);
console.log("Server running on port 3000");
