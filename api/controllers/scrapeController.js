const {
  scrapeAnimeList,
  scrapeAnimeDetail
} = require("../utils/scrapeHelper");

/* ===== LIST ===== */
exports.getAnimeList = async (req, res) => {
  try {
    const data = await scrapeAnimeList();

    if (!data || !data.length) {
      return res.status(200).json({
        success: false,
        message: "Source blocked or empty (Vercel limitation)",
        data: []
      });
    }

    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    console.error("getAnimeList:", err.message);

    // 🔥 JANGAN next(err)
    res.status(200).json({
      success: false,
      message: "Scraper failed",
      data: []
    });
  }
};

/* ===== DETAIL ===== */
exports.getAnimeDetail = async (req, res) => {
  try {
    const { slug } = req.params;

    const data = await scrapeAnimeDetail(slug);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Anime not found or blocked"
      });
    }

    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    console.error("getAnimeDetail:", err.message);

    res.status(200).json({
      success: false,
      message: "Detail scraper failed",
      data: null
    });
  }
};