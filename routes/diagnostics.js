const diagnostics = require('express').Router();
const uuid = require('uuid');
const fs = require('fs');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
let diagnosticJSON = require('../db/diagnostics.json');
let diagArry = [];

for(const i of diagnosticJSON) {
  diagArry.push(i);
}

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  res.send(JSON.stringify(diagArry));
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  console.log(req.body);
  let newObj = {
    time: new Date().getTime(),
    error_id: uuid.v4(),
    errors: req.body
  }
  diagArry.push(newObj);
  fs.writeFile("./db/diagnostics.json", JSON.stringify(diagArry), (err) => {
    (err) ? console.log(err) : console.log("Successfully wrote to file");
  });
  res.send(JSON.stringify(diagArry));
});

module.exports = diagnostics;
