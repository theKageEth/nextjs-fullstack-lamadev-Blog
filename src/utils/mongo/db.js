import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_Url);
  } catch (error) {
    throw new error("connection failed");
  }
};

export default dbConnect;
