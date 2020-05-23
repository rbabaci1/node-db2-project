exports.up = function (knex) {
  return knex.schema.createTable("cars", table => {
    table.increments("car_id");
    // required table columns
    table.string("VIN", 128).unique().notNullable();
    table.string("make", 128).notNullable();
    table.string("model", 128).notNullable();
    table.integer("mileage").notNullable();
    // optional table columns
    table.string("title_status", 128);
    table.string("transmission_type", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
