//node modules
const http = require("http");
const path = require("path");
//3rd party modules
const express = require("express");
//body passer
const bodyParser = require("body-parser");
// my modules
const dir = require("./util/path");
const app = express();
const url = path.join(dir, "views", "404.html");
app.use(bodyParser.urlencoded({ extended: false }));
// templete engine
app.set("view engine", "ejs");
// this midleware responsibale for allow access for public directory
app.use(express.static(path.join(__dirname, "public")));
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
app.use("/admin", adminRouter.router);
app.use(shopRouter);
app.use((req, res, next) => {
  res.render("404", { title: "Page not found" });
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
