import mongoose, { Schema, model } from "mongoose";
import { LessonTypeEnum } from "../../core/entities/enums/lessonType.enum";
import { LessonFormatEnum } from "../../core/entities/enums/lessonFormat.enum";
import { TargetTypeEnum } from "../../core/entities/enums/targetType.enum";

export interface IScheduleEntryModel {
  _id: mongoose.Types.ObjectId; // Уникальный идентификатор записи
  target: {
    type: TargetTypeEnum; // Тип цели (GROUP, FACULTY, UNIVERSITY)
    values?: string[]; // Значения цели (например, номер группы или название факультета)
  };
  discipline: string; // Название дисциплины
  teachers: string[]; // Список преподавателей
  lessonType: LessonTypeEnum; // Тип занятия
  daysAndTime: Record<number, number[]>; // Маппинг дней недели на массив времени
  periodStart: string; // Дата начала периода
  periodEnd: string; // Дата окончания периода
  lessonFormat: LessonFormatEnum; // Формат занятия
  room: string; // Аудитория или ссылка на ресурс
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
