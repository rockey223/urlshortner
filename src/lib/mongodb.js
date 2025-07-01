const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    console.log("envvvvvvvv",process.env.MONGODB_URI);
    
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectToDatabase;
