import express from 'express';
import core from '../models/core.js';

const corerouter = express.Router()
 corerouter.get('/', async(req,res) => {
     try{
     const corevalue=await core.find();
     res.json(corevalue);
     }catch(err){
         res.send(err);
     }

     //res.send('get request')
 });
 corerouter.post('/', async(req,res) =>{
     try{
        const corevalue=new core({
            "_id":req.query._id,
            "Name": req.query.name,                          
            "Designation":req.query.Designation,
            "Role":req.query.Role,
            "Email":req.query.Email,
            "USN":req.query.USN,
            "Password":req.query.Password             
        });
     const a1=await corevalue.save();
        res.json(a1);

        //form url request.querry
     } catch(err){
         res.send(err);
     }
 });
export default corerouter;
