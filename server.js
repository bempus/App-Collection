const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  const host = req.get("host");

  if (host.match(/minesweeper\..*/i)) {
    return express.static(__dirname + "/static/minesweeper")(req, res, next);
  }
  next();
});

app.use(express.static(__dirname + "/static"));

app.listen(process.env.PORT || 3000);
