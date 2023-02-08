import mongoose from 'mongoose';

const connectDB = async () => {
    try {
         mongoose.set('strictQuery', true)
         mongoose.connect(process.env.MongoDB);
        console.log(`MongoDB Connected`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

export default connectDB;