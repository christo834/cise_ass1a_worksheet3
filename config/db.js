const mongoose = require("mongoose");
const config = require("config");
const db = "mmongodb+srv://cise3:cise3@cluster0.z8wsvnn.mongodb.net/";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
