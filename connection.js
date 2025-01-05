const mongoose = require("mongoose");

async function connectMongo() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/nodeUser", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully.");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
}

module.exports = connectMongo;
