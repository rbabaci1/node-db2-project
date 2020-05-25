const db = require("../dbConfig");

const insert = newCar => db("cars").insert(newCar).first();
const get = () => db("cars");
const getById = car_id => db("cars").where({ car_id }).first();
const update = (car_id, car) => db("cars").update(car).where({ car_id });
const remove = car_id => db("cars").delete().where({ car_id });

module.exports = { insert, get, getById, update, remove };
