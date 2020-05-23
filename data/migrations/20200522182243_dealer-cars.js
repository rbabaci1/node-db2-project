exports.up = function (knex) {
  return knex.schema.createTable("cars", table => {
    table.increments();
    // required table columns
    table.text("VIN", 128).unique().notNullable();
    table.text("make", 128).notNullable();
    table.text("model", 128).notNullable();
    table.integer("mileage").notNullable();
    // optional columns
    table.text("transmission", 128);
    table.text("title", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
