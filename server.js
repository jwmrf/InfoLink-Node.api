//const express = require("express");
const bodyParser = require('body-parser');
const servidor = require('./config/sistema/express');
const app = express();
servidor = require('./config/sistema/express');

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended: false}));
//app.get("/", (req, res) => {
  //res.send("Express on Vercels");
//});

//app.listen(5000, () => {
  //console.log("Running on port 5000.");
//});

// Export the Express API
module.exports = servidor;
