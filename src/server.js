const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send('Hello from express');
});

app.get("/api", (req, res) => {
    res.send('Hello from api');
});

app.get("/help", (req, res) => {
    res.send('Hello from help');
});

app.get("*", (req, res) => {
    res.send('page not found');
});

app.listen(3000,()=>console.log("server is on port 3000"));