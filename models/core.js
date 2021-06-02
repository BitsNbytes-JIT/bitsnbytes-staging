const mongoose = require("mongoose");

const coreSchema = mongoose.Schema({
    _id:String,
    Name: { type: String, required:  true },
    Designation: { type: String, required:  true },
    Role: { type: String, required:  true },
    Email: { type: String, required:  true },
    USN: { type: String, required:  true },
    Password: { type: String, required:  true }
});


module.exports = core = mongoose.model('Core', coreSchema);
