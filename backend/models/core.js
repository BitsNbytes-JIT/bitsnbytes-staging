import mongoose from 'mongoose';

const coreSchema = mongoose.Schema({
    _id:String,
    Name:String,
    Designation:String,
    Role:String,
    Email:String,
    USN:String,
    Password:String
});

var core = mongoose.model('Core', coreSchema);

export default core;