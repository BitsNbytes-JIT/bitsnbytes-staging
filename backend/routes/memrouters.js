import express from 'express';
import bcrypt from 'bcryptjs';
import Joi from '@hapi/joi';
const router = express.Router();

import memberSchema from '../models/member.js';
import registerValidation from '../validation/memberRegValidation.js';

router.get('/', async(req,res,next) => {
    try{
        //console.log("GET request");
        const membervalues = await memberSchema.find();
        res.json(membervalues);

    }
    catch(err){
        res.send("Error"+err);
    }
});





//below code adds redundant values

// router.route('/register').post((req, res, next) => {
//     memberSchema.create(req.body, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             const member = new memberSchema({
//                                  name : req.body.name,
//                                  usn : req.body.usn,
//                                 branch : req.body.branch,
//                                 sem :req.body.sem,
//                                  email :req.body.email ,
//                                  password : req.body.password,
//                                  phone : req.body.phone,
//                                  volunteer : req.body.volunteer,
//                                  interest : req.body.interest
//                             });
                
//                             //to Hash the password
//                           const round = 10;
//                      bcrypt.genSalt(round, (err,salt) =>{
//                                 bcrypt.hash(member.password, salt, (err,hash) => {
//                                     if(err){
//                                   return err;
//                                     }
//                                     member.password = hash;
//                                         member
//                                           .save()
//                                           .then(user => res.status(200).json(user))
//                                           .catch(err => console.log(err));
                
//                                 });
//                           });
//         }
//     })
// });



//working code below---------------------------------------------------

router.post('/register', (req,res) => {

    // to validate the input values
    const {error,value} = registerValidation(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
            
                          
    // to check whtether email already exists

    memberSchema.findOne({email:req.body.email}).then( user => {
        if(user){
            return res.status(400).json({email:"Email Already exits"});
        }

        //save the values
        else{
            const member = new memberSchema({
                name : req.body.name,
                usn : req.body.usn,
                branch : req.body.branch,
                sem :req.body.sem,
                email :req.body.email,
                phone : req.body.phone,
                volunteer : req.body.volunteer,
                interest : req.body.interest
            });
           

            //to Hash the password
            // const round = 10;
            // bcrypt.genSalt(round, (err,salt) =>{
            //     bcrypt.hash(member.password, salt, (err,hash) => {
            //         if(err){
            //          return err;
            //         }
            //         member.password = hash;

            // save the values in db
                    member
                          .save()
                          .then(user => res.status(200).json(user))
                          .catch(err => console.log(err));

              
            }
    });

});

export default router;


