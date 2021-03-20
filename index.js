const express = require("express");
const app = express();
const port = 3004;

app.get("/ti", (req, res) => res.send("Hello world"));

app.listen(port, () => console.log(`Listening at port: ${port}`));
