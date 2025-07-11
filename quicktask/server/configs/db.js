const mongoose = require("mongoose");

const connector = "mongodb://localhost:27017/quicktasks";

const connectDB = async () => {
  try {
   await mongoose.connect(connector, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
      });
      
    console.log("Connected to MongoDB")
    
  } catch (error) {
    console.error("MongoDB connection failed", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
