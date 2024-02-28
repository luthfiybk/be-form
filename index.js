const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const corsOptions = {
    origin: "https://surveisosmed.vercel.app"
}
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

const db = require("./connection");
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Database with { force: true }");
// });
require("./routes")(app);

app.listen(4000, "0.0.0.0", () => {
    console.log("Server is running on port 4000");
});
