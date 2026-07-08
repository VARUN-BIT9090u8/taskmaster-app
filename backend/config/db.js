import mongoose from "mongoose";

// export const connectDB = async () => {
//   await mongoose
//     .connect(
//       "mongodb+srv://aayush_db_user:tasktracker328@cluster0.eemtdih.mongodb.net/TaskTacker"
//     )
//     .then(() => {
//       console.log("DB connected");
//     });
// };

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); // exit if DB fails
  }
};
