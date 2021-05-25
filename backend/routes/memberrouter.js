import express from 'express';
import member from '../models/member.js';

const memberrouter = express.Router()
 memberrouter.get('/', async(req,res) => {
    try{
        const membervalue=await member.find();
        res.json(membervalue);
        }catch(err){
            res.send(err);
        }
   
        //res.send('get request')
    });
    memberrouter.post('/', async(req,res) =>{
        try{
           const membervalue=new member({
               "_id":req.query._id,
               "Name": req.query.Name,                          
               "USN":req.query.USN,
               "Branch":req.query.Branch,
               "Sem":req.query.Sem,
               "Email":req.query.Email,
               "Phone":req.query.Phone,
               "Volunteer":req.query.Volunteer,
               "Interests":req.query.Interests             
           });
        const a1=await membervalue.save();
           res.json(a1);
   
           //form url request.querry
        } catch(err){
            res.send(err);
        }
    });

export default memberrouter;

