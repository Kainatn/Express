const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("helo");
});

port = 9005;
app.listen(port);




