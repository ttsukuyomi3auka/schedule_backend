import mongoose, { Schema, model } from "mongoose";
import { LessonTypeEnum } from "../../core/entities/enums/lessonType.enum";
import { LessonFormatEnum } from "../../core/entities/enums/lessonFormat.enum";
import { TargetTypeEnum } from "../../core/entities/enums/targetType.enum";

export interface IScheduleEntryModel {
  _id: mongoose.Types.ObjectId;
  target: {
    type: TargetTypeEnum;
    values?: string[];
  };
  discipline: string;
  teachers: string[];
  lessonType: LessonTypeEnum;
  daysAndTime: Record<number, number[]>;
  periodStart: string;
  periodEnd: string;
  lessonFormat: LessonFormatEnum;
  room: string;
}

const scheduleEntrySchema = new Schema<IScheduleEntryModel>({
  target: {
    type: {
      type: String,
      enum: Object.values(TargetTypeEnum),
      required: true,
    },
    values: { type: [String], required: true },
  },
  discipline: { type: String, required: true },
  teachers: { type: [String], required: true },
  lessonType: {
    type: String,
    enum: Object.values(LessonTypeEnum),
    required: true,
  },
  daysAndTime: { type: Map, of: [Number], required: true },
  periodStart: { type: String, required: true },
  periodEnd: { type: String, required: true },
  lessonFormat: {
    type: String,
    enum: Object.values(LessonFormatEnum),
    required: true,
  },
  room: { type: String, required: true },
});

export const ScheduleEntryModel = model<IScheduleEntryModel>("ScheduleEntry", scheduleEntrySchema);
