const axios = require("axios");
const cheerio = require("cheerio");

const BASE_URL = "https://otakudesu.cloud";

const client = axios.create({
  timeout: 10000,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
  },
  validateStatus: () => true // ⬅️ BIAR GA THROW
});

/* ================= LIST ================= */
exports.scrapeAnimeList = async () => {
  try {
    const response = await client.get(BASE_URL);

    if (!response.data || typeof response.data !== "string") {
      return [];
    }

    const $ = cheerio.load(response.data);

    if (!$(".venz ul li").length) return [];

    const result = [];

    $(".venz ul li").each((_, el) => {
      const link = $(el).find("a").attr("href");
      if (!link) return;

      result.push({
        title: $(el).find("a").text().trim(),
        slug: link.replace(BASE_URL, "").replace(/^\/+/g, "")
      });
    });

    return result;
  } catch (err) {
    console.error("Scrape list error:", err.message);
    return [];
  }
};

/* ================= DETAIL ================= */
exports.scrapeAnimeDetail = async (slug) => {
  try {
    const response = await client.get(`${BASE_URL}/${slug}`);

    if (!response.data || typeof response.data !== "string") {
      return null;
    }

    const $ = cheerio.load(response.data);

    const title = $(".jdlrx h1").first().text().trim();
    const image = $(".fotoanime img").attr("src") || null;

    if (!title) return null;

    return {
      title,
      image
    };
  } catch (err) {
    console.error("Scrape detail error:", err.message);
    return null;
  }
};