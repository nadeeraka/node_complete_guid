const http = require("http");

const express = require("express");
//body passer
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
app.use(adminRouter);
app.use(shopRouter);
app.use((req, res, next) => {
  res.send("page not found");
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
