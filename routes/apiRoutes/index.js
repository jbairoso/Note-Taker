//file system
const fs = require("fs");
const { request } = require("http");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

//routing
module.exports = function (app) {
  // GET api request
  app.get("/api/notes", (request, response) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    response.json(data);
  });

  //POST api request
  app.post("/api/notes", (request, response) => {
    const newNotes = req.body;
    newNotes.id = uuidv4;
    let data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./db/db.json"), "utf8"));
    data.push(newNotes);
  });
};
