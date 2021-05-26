import express from 'express'
import connectDB from './backend/database/connection.js';
import dotenv from "dotenv"
import  path from  'path';
import routes from "./backend/routes/routes.js"
import cors from 'cors'
dotenv.config();
const port = process.env.PORT || 8000;
// create an express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/", routes);
// connect to mongoDb
connectDB();


app.listen(port, ()=> { console.log(`Server is running on http://localhost:${port}`)});

app.use((req, res, next) => {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});