import mongoose from 'mongoose';

const URI =  "mongodb+srv://sumanth:nsumanth@6@bnb-sumanth.1bbal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;