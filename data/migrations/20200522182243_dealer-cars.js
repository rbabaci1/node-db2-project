exports.up = function (knex) {
  return knex.schema.createTable("cars", table => {
    table.increments();
    // required table columns
    table.string("VIN", 128).notNullable().unique();
    table.string("make", 128).notNullable();
    table.string("model", 128).notNullable();
    table.integer("mileage").notNullable();
    // optional columns
    table.string("transmission", 128);
    table.string("title", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
