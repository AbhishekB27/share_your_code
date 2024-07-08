import mongoose from "mongoose";

const codeSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  link: {
    type: String,
    required: [true, "Link is required"],
  },
  code: {
    type: String,
    required: [true, "Code is required"],
  },
  uniqueKey: {
    type: String,
    required: [true, "Unique key is required"],
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
  secretKey: {
    type: String,
  },
});

const Code = mongoose.models.code || mongoose.model("code", codeSchema);
export default Code;
