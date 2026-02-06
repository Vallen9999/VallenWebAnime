const axios = require("axios");
const cheerio = require("cheerio");

const BASE_URL = "https://otakudesu.cloud";

const client = axios.create({
  timeout: 10000,
  headers: {
    "User-Agent": "Mozilla/5.0"
  }
});

// ================= LIST =================
exports.scrapeAnimeList = async () => {
  try {
    const { data } = await client.get(BASE_URL);
    const $ = cheerio.load(data);

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

// ================= DETAIL =================
exports.scrapeAnimeDetail = async (slug) => {
  try {
    const { data } = await client.get(`${BASE_URL}/${slug}`);
    const $ = cheerio.load(data);

    const title = $(".jdlrx h1").first().text().trim();
    const image = $(".fotoanime img").attr("src");

    return {
      title,
      image
    };
  } catch (err) {
    console.error("Scrape detail error:", err.message);
    return null;
  }
};