const mongoose = require("mongoose");

const AnalyticsSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  userCount: { type: Number, required: true },
  activity: { type: Number, required: true },
});

module.exports = mongoose.model("Analytics", AnalyticsSchema);
