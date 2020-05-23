const db = require("../dbConfig");

const insert = newCar => db("cars").insert(newCar);
const get = () => db("cars");
const getById = id => db("cars").where({ id });

module.exports = { insert, get, getById };
