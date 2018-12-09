const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;

// const path = require("path");
// const express = require("express");

// const router = express.Router();
// //const url = path.join(__dirname, "../", "views", "shop.html");

// router.get("/", (req, res, next) => {
//   const products = productArr.products;
//   res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
// });

// module.exports = router;
