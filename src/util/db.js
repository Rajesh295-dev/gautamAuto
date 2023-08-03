
import mongoose from "mongoose";

mongoose.set('strictQuery', true);

// Connect to MongoDB
const connect = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error)
        throw new Error("Connection failed!", error);
    }
};

export default connect;

// Thats how I set up the connection with my database