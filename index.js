const express = require('express');
const {connectDB} = require('./backEnd/database/connection.js');
const dotenv = require('dotenv');
const cors = require('cors');


const memberRouter = require('./backEnd/routes/memberRouter.js');




dotenv.config();

const port = process.env.PORT || 8080;
// create an express app
const app = express();
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(cors());


// connect to mongoDb
connectDB();


//app.use('/core',corerouters);

app.use('/mem',memberRouter);
// app.post('/mem/register', (req,res) => {

//     console.log(req.body);
//     res.status(200).send(req.body.Name);
// });
    


app.listen(port, ()=> { 
    console.log(`Server is running on http://localhost:${port}`)}
    );
