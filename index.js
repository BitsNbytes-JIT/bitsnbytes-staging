require('dotenv').config();
const express = require('express');
const connectDB = require('./backend/database/connection');
const port = process.env.PORT || 8080;
const path = require('path');

// create an express app
const app = express();

// connect to mongoDb
connectDB();

// app.use('/', require('./backend/routes/router'))

app.listen(port, ()=> { console.log(`Server is running on http://localhost:${port}`)});