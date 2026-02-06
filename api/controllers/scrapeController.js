const {
  scrapeAnimeList,
  scrapeAnimeDetail
} = require("../utils/scrapeHelper");

exports.getAnimeList = async (req, res, next) => {
  try {
    const data = await scrapeAnimeList();

    res.json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
};

exports.getAnimeDetail = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const data = await scrapeAnimeDetail(slug);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Anime not found"
      });
    }

    res.json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
};