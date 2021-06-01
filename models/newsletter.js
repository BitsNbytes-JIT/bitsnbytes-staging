const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
    title:  { type: String, required:  true },
    message: { type: String, required:  true },
    name:  { type: String, required:  true },
    creator : String,
    tags: [String],
    images: [String],
    likes: { 
        type: [String], 
        default: [] 
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})


module.exports = Newsletter = mongoose.model('Newsletters', newsSchema);
