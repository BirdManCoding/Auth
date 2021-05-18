import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
   email: {type: String, required: true},
   passwordHash: {type: String, required: true},
   posts: [{
     type: mongoose.Types.ObjectId,
     ref: "Post",
   }]
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;