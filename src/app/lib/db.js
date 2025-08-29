import mongoose from "mongoose";


let isConnected = false; 

export async function connectDB() {
  if (isConnected) {
    return;
  }

  const mongoURI = process.env.MONGODB_URI;
 

  try {
    const db = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1;

    if (isConnected) {
      console.log("MongoDB connected");
    } else {
      console.error("connection failed");
    }
  } catch (error) {
    console.error(" connection error:", error);
    throw error;
  }
}
