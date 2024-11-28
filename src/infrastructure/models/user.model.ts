import { Schema, model } from "mongoose";
import { UserRoleEnum } from "../../core/entities/enums/userRole.enum";

export interface IUserDataBaseModel {
  fullName: string;
  login: string;
  hasPassword: string;
  role: UserRoleEnum;
  groupNumber?: number;
}

const userSchema = new Schema<IUserDataBaseModel>({
  fullName: { type: String, required: true },
  login: { type: String, required: true, unique: true },
  hasPassword: { type: String, required: true },
  role: { type: String, enum: Object.values(UserRoleEnum), required: true },
  groupNumber: { type: Number },
});

export const UserDataBaseModel = model<IUserDataBaseModel>("User", userSchema);
