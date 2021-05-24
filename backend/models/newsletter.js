import mongoose from 'mongoose';

const newsSchema = mongoose.Schema({
    title:  { type: String, required:  true },
    message: String,
    name:  { type: String, required:  true },
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { 
        type: [String], 
        default: [] 
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Newsletter = mongoose.model('Newsletters', newsSchema);

export default  Newsletter;