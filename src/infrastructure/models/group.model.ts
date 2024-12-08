import mongoose, { Schema, model } from "mongoose";

export interface IGroupModel {
  _id: mongoose.Types.ObjectId;
  number: number;
  direction: string;
  profile: string;
}

const groupSchema = new Schema<IGroupModel>({
  number: { type: Number, required: true },
  direction: { type: String, required: true },
  profile: { type: String, required: true },
});

export const GroupModel = model<IGroupModel>("Group", groupSchema);
