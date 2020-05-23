exports.up = function (knex) {
  return knex.schema.table("cars", table => {
    table.renameColumn("VIN", "vin");
  });
};

exports.down = function (knex) {
  return knex.schema.table("cars", table => {
    table.renameColumn("vin", "VIN");
  });
};
