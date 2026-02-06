const {
  getWeeklySchedule,
  getScheduleByDay
} = require("../models/scheduleModel");

exports.getSchedule = async (req, res, next) => {
  try {
    const data = await getWeeklySchedule();

    res.json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
};

exports.getScheduleByDay = async (req, res, next) => {
  try {
    const { day } = req.params;

    const data = await getScheduleByDay(day);

    res.json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
};