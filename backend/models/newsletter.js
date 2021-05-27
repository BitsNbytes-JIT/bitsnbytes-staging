import mongoose from 'mongoose';

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

var Newsletter = mongoose.model('Newsletters', newsSchema);

export default  Newsletter;