const path = require("path");

//routing
module.exports = function (app) {
  //GET/notes return notes.html
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  //GET * will return index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..public/index.html"));
  });
};
