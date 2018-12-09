const path = require("path");
const express = require("express");

const router = express.Router();
const adminData = [];

// get requests
//const url = path.join(__dirname, "../", "views", "add-product.html");
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    title: "Add Product",
    path: "/admin/add-product"
  });
});
// post request
router.post("/admin/add-product", (req, res) => {
  productArr.push({ title: req.body.title });
  res.redirect("/");
});

exports.router = router;
exports.adminData = adminData;

// const path = require("path");
// const express = require("express");

// const router = express.Router();
// const productArr = [];

// // get requests
// //const url = path.join(__dirname, "../", "views", "add-product.html");
// router.get("/add-product", (req, res, next) => {
//   res.render("add-product", {
//     title: "Add Product",
//     path: "/admin/add-product"
//   });
// });
// // post request
// router.post("/admin/add-product", (req, res) => {
//   productArr.push({ title: req.body.title });
//   res.redirect("/");
// });

// exports.router = router;
// exports.productArr = productArr;
