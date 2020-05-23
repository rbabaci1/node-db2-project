const db = require("../dbConfig");

const get = () => db.get("cars");

module.exports = { get };
