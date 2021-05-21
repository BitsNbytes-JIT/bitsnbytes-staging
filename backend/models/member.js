import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    _id:String,
    Name:String,
    USN:String,
    Branch:String,
    Sem:String,
    Email:String,
    Phone:Integer,
    Volunteer:Boolean,
    Intrests:String
});

var member = mongoose.model('Core', userSchema);

export default member;