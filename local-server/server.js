const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  console.log(`${new Date()} - ${req.method} request for ${req.url}`);
  next();
});

app.use(express.static(__dirname + "/static"));

app.listen(port, function () {
  console.log(`Serving static on port ${port}`);
});
