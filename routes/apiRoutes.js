//file system
const fs = require("fs");
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
    const newNote = request.body;
    newNote.id = (uuidv4);
    //reads
    let data = JSON.parse(
      fs.readFileSync("./db/db.json", "utf8"));
    data.push(newNote);
    //writes
    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    response.json(data);
  });
};
