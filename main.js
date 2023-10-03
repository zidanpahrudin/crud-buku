const express = require("express");
const app = express();

// config
const dbCOnnection = require("./config/db");

dbCOnnection();

app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("API RUNNING"));
app.use("/api", require("./src/routes/index"));



app.listen(PORT, () => console.log('server start on port ' + PORT));