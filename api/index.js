const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const path = require("path");

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(cors());
app.use(express.json());

app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000, // 1 menit
    max: 60, // max 60 request / menit / IP
    standardHeaders: true,
    legacyHeaders: false
  })
);

/* ================= STATIC FRONTEND ================= */
// ⬇️ INI YANG SEBELUMNYA HILANG
app.use(express.static(path.join(__dirname, "../public")));

/* ================= API ROUTES ================= */

app.use("/api/anime", require("./routes/anime"));
app.use("/api/schedule", require("./routes/schedule"));
app.use("/api/user", require("./routes/user"));

/* ================= FALLBACK FRONTEND ================= */
// ⬇️ SEMUA ROUTE NON-API → index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

/* ================= ERROR HANDLER ================= */

app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error"
  });
});

module.exports = app;