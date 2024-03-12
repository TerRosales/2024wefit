import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      firstName: String,
      middleName: String,
      lastName: String,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { Type: Date, default: Date.now },
    post: {},
    likes: {},
    comments: {},
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
