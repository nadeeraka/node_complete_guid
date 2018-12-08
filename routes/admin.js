const express = require("express");

const router = express.Router();

router.get("/product", (req, res) => {
  res.send("product page ");
});

router.get("/shop", (req, res) => {
  res.send("Shop page ");
});

module.exports = router;
