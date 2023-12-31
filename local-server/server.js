const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  console.log(`${new Date()} - ${req.method} request for ${req.url}`);
  next();
});

// Define a route to serve the tfjs-predict.html file from the 'static' folder
app.get("/", function (req, res) {
  res.sendFile("tfjs-predict.html", { root: "./static" });
});

app.use(express.static("./static"));

app.listen(port, function () {
  console.log(`Serving static on port ${port}`);
});
