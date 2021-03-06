const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8060;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("public"));

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsScraper";

// let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsScrapermongodb://user20:password20@ds315359.mlab.com:15359/heroku_57kvl90q";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// ROUTES
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, function() {
  console.log(`App listening on http://localhost:${PORT}`);
});
