exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("sales")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("sales").insert([
        { car_id: 1, sales_amount: "$1999" },
        { car_id: 1, sales_amount: "$1999" },
        { car_id: 1, sales_amount: "$1999" },
        { car_id: 3, sales_amount: "$3999" },
        { car_id: 3, sales_amount: "$3999" },
        { car_id: 3, sales_amount: "$3999" },
        { car_id: 4, sales_amount: "$4999" },
        { car_id: 5, sales_amount: "$5999" },
        { car_id: 6, sales_amount: "$6999" },
        { car_id: 7, sales_amount: "$7999" },
      ]);
    });
};
