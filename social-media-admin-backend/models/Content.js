const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  status: { type: String, enum: ["approved", "pending", "rejected"], default: "pending" },
  reports: { type: Number, default: 0 },
});

module.exports = mongoose.model("Content", ContentSchema);
