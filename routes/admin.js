const path = require("path");
const express = require("express");

const router = express.Router();

const url = path.join(__dirname, "../", "views", "add-product.html");
router.get("/admin/add-product", (req, res) => {
  res.sendFile(url);
});

router.get("/shop", (req, res) => {
  res.send("Shop page ");
});

module.exports = router;
