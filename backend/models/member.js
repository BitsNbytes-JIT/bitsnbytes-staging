import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    _id:String,
    Name: { type: String, required:  true },
    USN:String,
    Branch: { type: String, required:  true },
    Sem:String,
    Email: { type: String, required:  true },
    Phone:Integer,
    Volunteer:Boolean,
    Intrests:String
});

var member = mongoose.model('Core', userSchema);

export default member;