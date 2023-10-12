const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hello from server");
})

app.get('/check', (req, res) => {
    return res.status(200);
})

app.listen(3000, () => {
    console.log("server listening on port 3000")
})