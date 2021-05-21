import mongoose from 'mongoose';

const newsSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
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