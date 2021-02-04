const express = require('express');
var request = require("request");
const app = express()
const path = require("path");
const port = 5000
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "/App.js"));
})

app.post("/", function(req, res) {
    var amount = Number(req.body.amount);
    var years = Number(req.body.years);
    var interest = Number(req.body.interest);



    var userAmount = Number(amount);
    var calculatedInterest = Number(interest) / 100 / 12;
    var calculatedPayments = Number(years) * 12;
    var x = Math.pow((1 + calculatedInterest), calculatedPayments);
    var monthly = (userAmount * x * calculatedInterest) / (x - 1);
    var totalPaymentCalculated = (monthly * calculatedPayments);
    var totalInterestCalculated = totalPaymentCalculated - userAmount;
    res.write("<h1> Total Payment is </h1>" + totalPaymentCalculated);
    res.write("<h3>Total Interest is </h3>" + totalInterestCalculated);
    res.write("<h3> EMI is </h3>" + monthly);

    res.end();
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
