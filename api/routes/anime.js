const express = require("express");
const router = express.Router();

const {
  getAnimeList,
  getAnimeDetail
} = require("../api/controllers/scrapeController");

router.get("/", getAnimeList);

router.get("/:slug", (req, res, next) => {
  const { slug } = req.params;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({
      success: false,
      message: "Invalid anime slug"
    });
  }

  next();
}, getAnimeDetail);

module.exports = router;