import mongoose from 'mongoose';

const coreSchema =  mongoose.Schema({
    
name:{
    type : String,
    required: true
},   
designation:{
    type: String,
    required:true
},
role:{
    type:String,
    required:true
},
email:{
    type:String,
    required: true
},

USN:{
    type:String,
    require:true
},

Password:{
    type:String,
    require:true
}}
)
;

var core = mongoose.model('Core', coreSchema);

export default core;

const getCore= function (callback, limit) {
    core.find(callback).limit(limit);
}
export { getCore};