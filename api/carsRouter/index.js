const express = require("express");

const router = express.Router();
const { insert, get, getById } = require("../../data/helpers");
const { getUndefinedProps } = require("../utils");

router.post("/", validateBody, async ({ body }, res, next) => {
  try {
    const [addedCarId] = await insert(body);
    const [addedCar] = await getById(addedCarId);

    res.status(201).json({ addedCar });
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
  const { vin, make, model, mileage } = body;
  const results = getUndefinedProps({ vin, make, model, mileage });

  if (!results) {
    next();
  } else {
    res.status(400).json({
      message: `👉🏼 [${results.join(
        " | "
      )}] 👈🏼 missing or incorrectly defined in the request body.`,
    });
  }
}
module.exports = router;
