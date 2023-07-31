let express = require("express");
let app = express();
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  console.log(`${new Date()} - ${req.method} request for ${req.url}`);
  next();
});

app.use(express.static("../static"));

app.listen(port, function() {
  console.log(`Serving static on port ${port}`);
});
