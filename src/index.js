require("dotenv").config(); // add this line **Load environment variables from .env file

const express = require("express");
const app = express();
//const port = 3000; // hard code

const port = process.env.PORT || 3000; // use environment variable or default to 3000

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
