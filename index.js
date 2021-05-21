import express from 'express'
import connectDB from './backend/database/connection.js';
import dotenv from "dotenv"
import  path from  'path';

dotenv.config();
const port = process.env.PORT || 8080;
// create an express app
const app = express();

// connect to mongoDb
connectDB();

// app.use('/', require('./backend/routes/router'))

app.listen(port, ()=> { console.log(`Server is running on http://localhost:${port}`)});