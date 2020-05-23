const express = require("express");

const router = express.Router();
const { insert, get } = require("../../data/helpers");

router.post("/", validateBody, async ({ body }, res, next) => {
  try {
    const addedCar = await inserts(body);

    res.status(201).json(addedCar);
  } catch ({ errno, code, message }) {
    next({
      message: "The car could not be added at this moment.",
      errno,
      code,
      reason: message,
    });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const cars = await get();

    res.status(200).json(cars);
  } catch ({ errno, code, message }) {
    next({
      message: "The cars could not be retrieved at this moment.",
      errno,
      code,
      reason: message,
    });
  }
});

// validations middleware
function validateBody({ body }, res, next) {
  const { VIN, make, model, mileage } = body;

  if (!body) {
    res.status(400).json({
      message: `Some info in the body is missing or incorrectly defined.`,
    });
  } else {
    next();
  }
}
module.exports = router;
