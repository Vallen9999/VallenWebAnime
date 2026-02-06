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

/* ===== API ROUTES (WAJIB DI ATAS) ===== */
app.use("/api/anime", require("./routes/anime"));
app.use("/api/schedule", require("./routes/schedule"));
app.use("/api/user", require("./routes/user"));

/* ===== HEALTH ===== */
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "VallenAnime" });
});

/* ===== STATIC FILE ===== */
app.use(express.static(path.join(process.cwd(), "public")));

/* ===== FRONTEND FALLBACK (PALING BAWAH) ===== */
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public/index.html"));
});

module.exports = app;