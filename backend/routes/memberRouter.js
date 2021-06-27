const express = require('express');

const router = express.Router();


//For Hashing passwords
const bcrypt = require('bcryptjs');

const memberSchema = require('../models/member.js');
const memberRegisterValidation = require('../validation/registerValidation.js');
const member = require('../models/member.js');

// For our reference..It returns all the records in database
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

//working code below---------------------------------------------------
// router.post('/', (req,res) => {
//    return memberRegisterValidation(req.query);
// });

router.post('/register', (req,res) => {
    console.log(req.body);

    //From validation
    console.log("Sending!!");
    const { errors, isValid } = memberRegisterValidation(req.body);
    console.log("After checking!!",isValid);

    if(!isValid){
        console.log(errors);
        return res.json(errors);
    }

    memberSchema.findOne({Email:req.body.Email}).then( user => {
        if(user){
            // return res.status(400).json({Email:"Email Already exits"});
            return res.json({Email:"Email Already exits"});
        }

        //save the values
        else{
            const member = new memberSchema({
                Name : req.body.Name,
                USN : req.body.USN,
                Branch : req.body.Branch,
                Sem:req.body.Sem,
                Email :req.body.Email,
                Password: req.body.Password,
                Phone : req.body.Phone,
                Role : req.body.Role    
            });
           

            //to Hash the password
            const round = 10;
            bcrypt.genSalt(round, (err,salt) =>{
                bcrypt.hash(member.Password, salt, (err,hash) => {
                    if(err){
                     return err;
                    }
                    member.Password = hash;
                
           

            //save the values in db
                    member
                          .save()
                          .then(user => {
                              console.log("Done!!!");
                              res.status(200).json(user)
                          })
                          .catch(err => console.log(err));
                        });

                        }); 
            }
    });

});

module.exports = router;