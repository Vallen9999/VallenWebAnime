const express = require("express");
const router = express.Router();

const {
  createUser
} = require("../api/controllers/userController");

// POST /api/user
router.post("/", (req, res, next) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({
      success: false,
      message: "Username and email are required"
    });
  }

  next();
}, createUser);

module.exports = router;