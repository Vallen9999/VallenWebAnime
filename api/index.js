const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const path = require("path");

const app = express();

/* ===== MIDDLEWARE ===== */
app.use(cors());
app.use(express.json());

app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 60
  })
);

/* ===== STATIC FILE ===== */
app.use(express.static(path.join(process.cwd(), "public")));

/* ===== API ===== */
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "VallenAnime" });
});

/* ===== FRONTEND FALLBACK ===== */
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public/index.html"));
});

module.exports = app;