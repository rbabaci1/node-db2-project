exports.up = function (knex) {
  return knex.schema.createTable("sales", table => {
    table.increments("sale_id");
    table.text("sales_amount", 128);
    table
      .integer("vehicle_id")
      .unsigned()
      .notNullable()
      .references("car_id")
      .inTable("cars")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {};
