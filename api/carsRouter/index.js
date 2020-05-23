const express = require("express");

const router = express.Router();

router.post("/", async (req, res, next) => {});

router.get("/", async (req, res, next) => {
  //   res.status(200).json({ message: "Hello there from ~API~" });
});

module.exports = router;
