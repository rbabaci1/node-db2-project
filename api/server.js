const express = require("express");
const helmet = require("helmet");

const db = require("../data/dbConfig");
const carsRouter = require("../api/carsRouter");

const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/cars", carsRouter);

server.get("/api/", (req, res) => {
  res.status(200).json({ message: "API is up!!!" });
});

module.exports = server;
