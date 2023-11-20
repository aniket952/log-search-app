const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");

const app = express();
const port = process.env.LOG_INGESTOR_PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(multer().any());
app.use(cors());

const db_connection = require("./helpers/db_connection");

app.use(db_connection.connect);
// route to receive JSON data
app.use("/api", require("./routes/logscript"));
app.use("/api", require("./routes/querylog"));

app.listen(port, () =>
  console.log(`[MW-SVC] Service is listening on port ${port}.`)
);

module.exports = app;
