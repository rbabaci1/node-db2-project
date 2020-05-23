const db = require("../dbConfig");

const insert = newCar => db("cars").insert(newCar);
const get = () => db("cars");
const getById = car_id => db("cars").where({ car_id });

module.exports = { insert, get, getById };
