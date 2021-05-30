import express from 'express';
const router = express.Router();
import coreschema from '../models/core.js';
// import validation from '../validation/memberRegValidation.js';




// router.get('/', async(req,res) => {
//     try{
//         //console.log("GET request");
//         const corevalues = await coreschema.find();
//         res.json(corevalues);

//     }
//     catch(err){
//         res.send("Error"+err);
//     }
// });

router.get('/', async(req,res) => {
    try{
        //console.log("GET request");
        const corevalues = await coreschema.find({
            name:req.query.name
        });
        res.json(corevalues);

    }
    catch(err){
        res.send("Error"+err);
    }
});

router.post('/', async(req,res) => {
    const coreschm = new coreschema({
        name : req.query.name,
        designation: req.query.designation,
        role: req.query.role,
        email: req.query.email,
        USN: req.query.USN,
        password: req.query.password
    });

    try{
        const a1 = await coreschm.save();
        // res.json(a1);
        res.send("success");

    }catch(err){
        res.send("Error"+err)
    }


})

export default router;



