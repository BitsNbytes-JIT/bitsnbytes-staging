import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    Name: String, 
    USN:String,
    Branch: String,
    Sem:String,
    Email: String,
    Phone:String,
    Volunteer:String,
    Intrests:String
});

var member = mongoose.model('Members', userSchema);

export default member;