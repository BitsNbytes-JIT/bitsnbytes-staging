import express from 'express'
import connectDB from './backend/database/connection.js';
import dotenv from "dotenv"
import  path from  'path';
import corerouter from './backend/routes/corerouter.js';
import memberrouter from './backend/routes/memberrouter.js';
dotenv.config();
const port = process.env.PORT || 8080;
// create an express app
const app = express();

// connect to mongoDb
connectDB();
 
 app.use('/core',corerouter);

 app.use('/member',memberrouter);  

app.listen(port, ()=> { console.log(`Server is running on http://localhost:${port}`)});