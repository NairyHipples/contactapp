var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');


//server test
// app.get('/', function(req, res){
//   res.send("Hello world from server.js")
// });

//use an html page as the template
app.use(express.static(__dirname + "/public"));
//parse body of received input
app.use(bodyParser.json());
//listen for GET request
app.get('/contactlist', function (req, res){
  console.log("I received a GET request");

  //get request from mongodb-db
  db.contactlist.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });
});

//listens to post req from ctrl
app.post('/contactlist', function(req, res){
  console.log(req.body);
  //send input data to db and back to the ctrl
  db.contactlist.insert(req.body, function(err, doc){
    res.json(doc);
  });
});

//delete
app.delete('/contactlist/:id', function(req, res){
  //get value of id from url
  var id = req.params.id;
  console.log(id);
  //identify chosen contact to remove
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
    //send removed contact back to ctrl
    res.json(doc);
  });
});

//edit
app.get('/contactlist/:id', function(req, res){
  var id = req.params.id;
  console.log(id);
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  });
});

//update
app.put('/contactlist/:id', function(req, res){
  var id = req.params.id;
  console.log(req.body.name);
  db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function (err, doc) {
      res.json(doc);
    });
});

app.listen(3000);
console.log("Server running on port 3000");
