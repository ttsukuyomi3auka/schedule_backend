import mongoose, { Schema, model } from "mongoose";

import { TargetTypeEnum } from "../../core/entities/enums/targetType.enum";
import { LessonFormatEnum } from "../../core/entities/enums/lessonFormat.enum";
import { LessonTypeEnum } from "../../core/entities/enums/lessonType.enum";

export interface IScheduleRecordModel {
  _id: mongoose.Types.ObjectId; // Уникальный идентификатор записи
  target: {
    type: TargetTypeEnum; // Тип цели (GROUP, FACULTY, UNIVERSITY)
    values?: string[]; // Значения цели
  };
  discipline: string; // Название дисциплины
  teachers: string[]; // Список преподавателей
  lessonType: LessonTypeEnum; // Тип занятия
  date: string; // Конкретная дата занятия
  day: number; // Номер дня недели
  time: number; // Время занятия
  lessonFormat: LessonFormatEnum; // Формат занятия
  room: string; // Аудитория или ссылка на ресурс
  scheduleEntryId: string; // Айди родительского ScheduleEntry
}

const scheduleRecordSchema = new Schema<IScheduleRecordModel>({
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
  date: { type: String, required: true },
  day: { type: Number, required: true },
  time: { type: Number, required: true },
  lessonFormat: {
    type: String,
    enum: Object.values(LessonFormatEnum),
    required: true,
  },
  room: { type: String, required: true },
  scheduleEntryId: { type: String, required: true },
});

export const ScheduleRecordModel = model<IScheduleRecordModel>(
  "ScheduleRecord",
  scheduleRecordSchema
);
