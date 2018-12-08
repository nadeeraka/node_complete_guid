const path = require("path");
const express = require("express");

const router = express.Router();
const url = path.join(__dirname, "../", "views", "shop.html");

router.get("/", (req, res) => {
  res.sendFile(url);
});

module.exports = router;
