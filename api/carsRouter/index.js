const express = require("express");

const router = express.Router();
const { insert, get } = require("../../data/helpers");

router.post("/", async (req, res, next) => {
  try {
  } catch (error) {}
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

module.exports = router;
