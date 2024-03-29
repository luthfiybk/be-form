const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const corsOptions = {
  origin: "https://surveisosmed.vercel.app",
  methods: "POST",
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const db = require("./connection");
require("./routes")(app);
const port = process.env.PORT || 4000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
