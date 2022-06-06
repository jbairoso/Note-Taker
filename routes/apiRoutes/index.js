//file system
const fs = require('fs');
const router = require("express").Router();
const path = require("path");

const getText = () => {
    const notes = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
    return JSON.parse (notes);
}
module.exports = router;