import mongoose from "mongoose";

const connectMongoDB = async() => {
    try {
       await mongoose.connect(process.env.MONGODB_URL);
        // console.log("conncetion successful");
    } catch (error) {
        console.log("failed to connect")
    }    
}

export default connectMongoDB