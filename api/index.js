const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// STATIC
app.use(express.static(path.join(__dirname, "../public")));

// API
app.use("/api/anime", require("./routes/anime"));
app.use("/api/schedule", require("./routes/schedule"));
app.use("/api/user", require("./routes/user"));

// ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;