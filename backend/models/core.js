import mongoose from 'mongoose';

const coreSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Designation:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    USN:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }

    
});

var core = mongoose.model('Core', coreSchema);

export default core;




