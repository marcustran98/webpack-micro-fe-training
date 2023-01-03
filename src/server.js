const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");


app.use('/', express.static(path.join(__dirname, '../dist'))); // use '/' path instead of /static

app.get("/user", (req, res) => {
    const htmlPath = path.resolve(__dirname, "../dist/user.html");
    const content = fs.readFileSync(htmlPath, 'utf-8');
    res.send(content);
});

app.get("/admin", (req, res) => {
    const htmlPath = path.resolve(__dirname, "../dist/admin.html");
    const content = fs.readFileSync(htmlPath, 'utf-8');
    res.send(content);
});

app.listen(3000, () => {
    console.log("server works")
});