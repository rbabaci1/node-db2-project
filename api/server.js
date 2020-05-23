const express = require("express");
const db = require("../data/dbConfig");

const server = express();

server.get("/api/", (req, res) => {
  res.status(200).json({ message: "API is up!!!" });
});

module.exports = server;
