import mongoose, { Schema, model } from "mongoose";

export interface ITeacherModel {
  _id: mongoose.Types.ObjectId;
  fullName: string;
}

const teacherSchema = new Schema<ITeacherModel>({
  fullName: { type: String, required: true },
});

export const TeacherModel = model<ITeacherModel>("Teacher", teacherSchema);
