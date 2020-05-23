const db = require("../dbConfig");

const insert = newCar => db("cars").insert(newCar);
const get = () => db("cars");

module.exports = { insert, get };
