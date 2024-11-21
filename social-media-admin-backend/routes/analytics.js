const express = require("express");
const router = express.Router();
const Analytics = require("../models/Analytics");

router.get("/", async (req, res) => {
  const analytics = await Analytics.find();
  res.json(analytics);
});

module.exports = router;
