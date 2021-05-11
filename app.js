const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello from API");
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
