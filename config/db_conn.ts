import mongoose from "mongoose";

// config/db_conn.ts

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define MONGODB_URI in your .env.local file");
}

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("⚡ Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "Restro_DB",
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
};
