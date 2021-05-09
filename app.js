const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false })); //
app.use(bodyParser.json()); //

// db config
const db = require("./config/keys").mongoURI;

// connect to db
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongodb connected!!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello world!!"));
console.log(users);

// use Routes
app.use("/api/users", users);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
