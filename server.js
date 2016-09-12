var express = require('express');
var app = express();

//server test
// app.get('/', function(req, res){
//   res.send("Hello world from server.js")
// });

//use an html page as the template
app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("Server running on port 3000");
