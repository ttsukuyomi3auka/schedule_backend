import { Schema, model } from "mongoose";

export interface IGroupModel {
  number: number;
  direction: string;
  profile: string;
}

const groupSchema = new Schema<IGroupModel>({
  number: { type: Number, required: true, unique: true },
  direction: { type: String, required: true },
  profile: { type: String, required: true },
});

export const GroupModel = model<IGroupModel>("Group", groupSchema);
