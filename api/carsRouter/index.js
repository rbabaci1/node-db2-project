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

router.put("/:id", validateId, validateBody, async (req, res, next) => {});
router.delete("/:id", async (req, res, next) => {});

// validations middleware
async function validateId(req, res, next) {
  try {
    const { id } = req.params;
    const [car] = await getById(id);

    if (car) {
      req.car = car;
      next();
    } else {
      next({
        status: 404,
        message: `The car with the specified ID does not exist.`,
      });
    }
  } catch (err) {
    next({
      error: `The car info could not be retrieved at this moment.`,
      reason: err.message,
    });
  }
}

function validateBody({ body }, res, next) {
  const { vin, make, model, mileage } = body;
  const results = getUndefinedProps({ vin, make, model, mileage });

  if (!results) {
    next();
  } else {
    res.status(400).json({
      message: `👉🏼 [ ${results.join(
        " | "
      )} ] 👈🏼 missing or incorrectly defined in the request body.`,
    });
  }
}
module.exports = router;
