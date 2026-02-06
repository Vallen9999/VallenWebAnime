const express = require("express");
const router = express.Router();
const { getAnimeList } = require("../controllers/scrapeController");

router.get("/", getAnimeList);

module.exports = router;