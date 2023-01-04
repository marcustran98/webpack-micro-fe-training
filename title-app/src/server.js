const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");


app.use('/', express.static(path.join(__dirname, '../dist'))); // use '/' path instead of /static

app.get("/", (req, res) => {
    const htmlPath = path.resolve(__dirname, "../dist/index.html");
    const content = fs.readFileSync(htmlPath, 'utf-8');
    res.send(content);
});

app.listen(3003, () => {
    console.log("server works")
});