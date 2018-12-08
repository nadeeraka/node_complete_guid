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

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
app.use(adminRouter);
app.use(shopRouter);
app.use((req, res, next) => {
  res.sendFile(url);
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
