const db = require("../dbConfig");

const get = () => db("cars");

module.exports = { get };
