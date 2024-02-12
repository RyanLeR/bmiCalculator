//jshint esversion: 6

const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: "true"}));

app.use(express.static(__dirname));

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/index.html") 
})



app.post("/bmicalculator", function(req, res) {
   
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    const result1 = (num1 / (num2 * num2)*10000);
    const result2 = result1.toFixed(2);
    
    res.send("Your BMI is " + result2);
    
});







app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
  });

app.listen("3000", function() {
    console.log("Server started on port 3000")
})