const express = require("express");
const router = express.Router();

const {
  getSchedule,
  getScheduleByDay
} = require("../api/controllers/scheduleController");

const VALID_DAYS = [
  "senin",
  "selasa",
  "rabu",
  "kamis",
  "jumat",
  "sabtu",
  "minggu"
];

// GET /api/schedule
router.get("/", getSchedule);

// GET /api/schedule/:day
router.get("/:day", (req, res, next) => {
  const day = req.params.day.toLowerCase();

  if (!VALID_DAYS.includes(day)) {
    return res.status(400).json({
      success: false,
      message: "Invalid day parameter"
    });
  }

  req.params.day = day;
  next();
}, getScheduleByDay);

module.exports = router;