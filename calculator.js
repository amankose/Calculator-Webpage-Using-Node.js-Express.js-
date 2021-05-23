const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var add = num1 + num2;
  var sub = num1 - num2;
  var mul = num1 * num2;
  var div = num1 / num2;
  res.send("The Addition is: " + add  + ".  " +  "The Substraction is: " + sub + ".  " + "The Multiplication is: " + mul + ".  " + "The Division is: " + div );
});

app.listen(3200, function(){
  console.log("Server started on port 3200.");
});
