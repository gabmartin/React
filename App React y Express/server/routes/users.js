const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.json(
    [{
      username: "Javi",
      age: 22,
    },
    {
      username: "Jesus",
      age: 25,
    },
    {
      username: "Andrea",
      age: 24,
    }]
  );
});

module.exports = route;