require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;
app.get("/", (req, res) => {
  res.send(`Tien Coder`);
});

app.get("/hello", (req, res) => {
  // res.send(`Hello TienCoder `);
  res.render(`sample.ejs`);
});
app.listen(port, hostname, () => {
  console.log(`Server is running at ${port}`);
});

app.set("views", "./src/views");
app.set("view engine", "ejs");
