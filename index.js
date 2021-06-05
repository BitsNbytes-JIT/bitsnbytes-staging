const express = require("express");
const passport = require("passport");
require("dotenv").config()

const connectDB = require('./database/connection');
const users = require("./routes/api/users");

const app = express();

// express middleware
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());


// Connect to MongoDB
connectDB()

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
