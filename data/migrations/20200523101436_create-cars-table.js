exports.up = function (knex) {
  return knex.schema.createTable("cars", table => {
    table.increments("car_id");
    // required table columns
    table.string("VIN", 128).unique().notNullable();
    table.string("make", 128).notNullable();
    table.string("model", 128).notNullable();
    table.integer("mileage").notNullable();
    // optional table columns
    table.string("title", 128);
    table.string("status", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
