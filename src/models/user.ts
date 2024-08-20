let User;

if (typeof window === "undefined") {
  const mongoose = require("mongoose");

  const userSchema = new mongoose.Schema({
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
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
  });

  User = mongoose.models?.user || mongoose.model("user", userSchema);
}

export default User;
