import mongoose, { Schema, model } from "mongoose";
import { UserRoleEnum } from "../../core/entities/enums/userRole.enum";

export interface IUserDataBaseModel {
  _id: mongoose.Types.ObjectId;
  fullName: string;
  login: string;
  hasPassword: string;
  role: UserRoleEnum;
  groupNumber?: number;
}

const userSchema = new Schema<IUserDataBaseModel>({
  fullName: { type: String },
  login: { type: String, required: true, unique: true },
  hasPassword: { type: String, required: true },
  role: { type: String, enum: Object.values(UserRoleEnum), default: UserRoleEnum.STUDENT },
  groupNumber: { type: Number },
});

export const UserDataBaseModel = model<IUserDataBaseModel>("User", userSchema);
