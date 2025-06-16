const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello My Friend!!!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
