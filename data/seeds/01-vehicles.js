const initialData = require("../../mockData");

exports.seed = function (knex) {
  return knex("cars")
    .del()
    .then(function () {
      return knex("cars").insert(initialData);
    });
};
