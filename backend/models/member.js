const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    USN:{
        type:String,
        required:true,
        unique:true
    },
    Branch:{
        type:String,
        required:true
    },
    Sem:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
    },
    Phone:{
        type:Number,
        required:true,
    },
    Role:{
        type:String,
    },

});

var member = mongoose.model('Member',memberSchema);

module.exports = member;