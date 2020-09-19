const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/public/" });
});
app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: __dirname + "/public/" });
});
PORT = 8000;
app.listen(process.env.PORT || PORT, () => {
  console.log("App is running on " + PORT);
});
