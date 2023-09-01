import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Error: {
    type: String,
    required: true,
  },
  Solution: {
    type: String,
    required: true,
  }
});

export default mongoose.model("Users", userSchema);
