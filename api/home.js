"use strict";

const message = require("../api_helpers/custom-function");

function handler(req, res) {
  let { name } = req.query;
  if (!name) {
    name = "Human!";
  }
  return res.json({
    ping: message(name),
  });
}

module.exports = handler;
