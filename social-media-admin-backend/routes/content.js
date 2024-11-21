const express = require("express");
const router = express.Router();
const Content = require("../models/Content");

router.get("/", async (req, res) => {
  const content = await Content.find();
  res.json(content);
});

router.post("/:id/moderate", async (req, res) => {
  const { action } = req.body;
  const status = action === "approve" ? "approved" : "rejected";
  await Content.findByIdAndUpdate(req.params.id, { status });
  res.json({ message: "Content moderated" });
});

module.exports = router;
