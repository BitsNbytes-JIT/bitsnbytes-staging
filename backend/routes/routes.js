import express from "express"
// import bcrypt from "bcryptjs"
// import jwt from "jsonwebtoken"

import members from "../models/member.js"

const router = express.Router();

router.post("/register", (req, res) => {
  members.create(req.query, (error, data)=>{
    console.log(data)
    if (error){
      console.log(error);
    } else{
      console.log(data)
      res.send(data)
    }
  }
  )

//   const member = new Members({
//     Name : req.query.Name,
//     USN : req.query.USN,
//     Branch : req.query.Branch,
//     Sem :req.query.Sem,
//     Email :req.query.Email ,
//     Phone : req.query.Phone,
//     Volunteer : req.query.Volunteer,
//     Intrests : req.query.Intrests
// });

// try{
//     const mem = member.save();
//     res.send(mem);
// }catch(err){
//     res.send(err)
// }
  });
  router.get("/",(req, res) => {
    members.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
  export default router;