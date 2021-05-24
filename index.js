import express from 'express'
import connectDB from './backend/database/connection.js';
import dotenv from "dotenv"
import  path from  'path';
import corerouters from './backend/routes/corerouter.js';
import memrouters from './backend/routes/memrouters.js';

// const items = require('./backend/routes/router');


dotenv.config();

const port = process.env.PORT || 8080;
// create an express app
const app = express();

// connect to mongoDb
connectDB();

// app.use('/sumanth', require('./backend/routes/router'));
app.use(express.json());

app.use('/core',corerouters);

app.use('/mem',memrouters);

app.listen(port, ()=> { 
    console.log(`Server is running on http://localhost:${port}`)}
    );