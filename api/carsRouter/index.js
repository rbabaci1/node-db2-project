const express = require("express");

const router = express.Router();
const { get } = require("../../data/helpers");

router.post("/", async (req, res, next) => {});

router.get("/", async (req, res, next) => {
  try {
    const cars = await get();

    res.status(200).json(cars);
  } catch (error) {
    next({ error });
  }
});

module.exports = router;
