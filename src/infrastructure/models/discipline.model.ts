import mongoose, { Schema, model } from "mongoose";

export interface IDisciplineModel {
  _id: mongoose.Types.ObjectId;
  name: string;
}

const disciplineSchema = new Schema<IDisciplineModel>({
  name: { type: String, required: true },
});

export const DisciplineModel = model<IDisciplineModel>("Discipline", disciplineSchema);
