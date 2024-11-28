import { Schema, model } from "mongoose";

const userSchema = new Schema({
  login: { type: String, required: true, unique: true },
  hasPassword: { type: String, required: true },
});

export const UserModel = model("User", userSchema);
