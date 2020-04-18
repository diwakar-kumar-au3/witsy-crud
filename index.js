var express = require("express");
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
require("dotenv").config();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
var url = process.env.mongoUrl;
var DbName = "witsy";

var user = require("./route/user");

MongoClient.connect(
  url,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  function (err, client) {
    if (err) throw err;
    console.log("DB connected");
    db = client.db(DbName);
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "./build/index.html"));
  });
}

app.locals.ObjectId;
ObjectId = require("mongodb").ObjectID;

app.use("/api/user", user);
app.listen(process.env.PORT || 5000);
