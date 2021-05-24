import express from 'express';

const router = express.Router();

import memberschema from '../models/member.js';

// router.get('/', async(req,res) => {
//     try{
//         //console.log("GET request");
//         const membervalues = await memberschema.find();
//         res.json(membervalues);

//     }
//     catch(err){
//         res.send("Error"+err);
//     }
// });

router.get('/', async(req,res) => {
    try{
        //console.log("GET request");
        const membervalues = await memberschema.find({
            name: req.query.name
        });
        res.json(membervalues);

    }
    catch(err){
        res.send("Error"+err);
    }
});

router.post('/', async(req,res) => {
    const memberschm = new memberschema({
        name : req.query.name,
        usn : req.query.usn,
        branch : req.query.branch,
        sem :req.query.sem,
        email :req.query.email ,
        password : req.query.password,
        phone : req.query.phone,
        volunteer : req.query.volunter,
        interest : req.query.interest
    });

    try{
        const a1 = await memberschm.save();
        res.send("success");

    }catch(err){
        res.send("Error"+err)
    }


});

router.delete( '/', async(req,res) =>{
    const userIndex = getUserIndex({
        name: req.query.name
    })


})

export default router;



