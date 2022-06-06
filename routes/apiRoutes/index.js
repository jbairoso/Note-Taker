//file system
const fs = require('fs');
const path = require("path");
const { v4: uuidv4 } = require("uuid");

//routing
module.exports = function(app){

    // get request 
    app.get("/api/notes", (request, response) => {
        let data = JSON.parse (fs.readFileSync("./db/db.json", "utf8"));
        response.json(data);
    });

    //
}

