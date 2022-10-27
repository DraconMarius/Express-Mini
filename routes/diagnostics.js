const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
let diagnosticJSON = require('../db/diagnostics.json');
console.log(typeof diagnosticJSON);
// let diagArry = [];
// // const path = diagnosticJSON;

// fs.readFile(diagnosticJSON, (err, data) => {
//   if (err) {
//     console.log(err + "readfile err");
//   } else {
//     diagArry = JSON.parse(data);
//   }
// }
// )

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  console.log(diagArry);
  res.json(diagArry);
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
});

module.exports = diagnostics;
