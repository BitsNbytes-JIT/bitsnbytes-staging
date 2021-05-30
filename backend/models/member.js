import mongoose from 'mongoose';

const memberSchema = mongoose.Schema({
    // _id:String,
    // Name:String,
    // USN:String,
    // Branch:String,
    // Sem:String,
    // Email:String,
    // Phone:Integer,
    // Volunteer:Boolean,
    // Intrests:String,
    // name,
    // usn,
    // branch,
    // sem,
    // email,
    // password,
    // phone,
    // volunteer,
    // interest

    name:{
        type : String,
        required: true
    },   
    usn:{
        type:String,
        required:true
    },
    branch: {
        type: String,
        required:true
    },
    sem :{
        type: Number,
        required:true
    },

    email:{
        type:String,
        required: true
    },
    phone :{
        type: Number,
        required: true
    },
    volunteer :{
        type: String,
        default: 'No'

    
    },
    interest: {
        type: String,


    }
    
    
});

var member = mongoose.model('Member',memberSchema);



// const get = (callback,limit) => {
//     member.find(callback),limit(limit);
//     return
// }
// export { get };

export default member;
// exports = {
//     get: function (callback, limit) {
//         member.find(callback).limit(limit);
// }
// }
