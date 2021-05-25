import mongoose from 'mongoose';

const memberSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true
        
    },
    Name:{
        type:String,
        required:true
    },
    USN:{
         type:String,
         required:true
    },
    Branch:{
        type:String,
        required:true
    },
    Sem:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Volunteer:{
        type:Boolean,
        required:true
    },
    Interests:{
        type:String,
        required:true
    }
});

var member = mongoose.model('member', memberSchema);

export default member;