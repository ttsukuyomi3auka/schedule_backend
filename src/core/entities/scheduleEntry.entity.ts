import { LessonFormatEnum } from "./enums/lessonFormat.enum";
import { LessonTypeEnum } from "./enums/lessonType.enum";
import { TargetEntity } from "./target.entity";

export interface ScheduleEntryEntity {
  id: string; // Уникальный идентификатор записи
  target: TargetEntity; // Целевая аудитория (группа/факультет/весь универ)
  discipline: string; // Название дисциплины
  teachers: string[]; // Массив преподавателей
  lessonType: LessonTypeEnum; // Тип занятия
  daysAndTime: Record<number, number[]>; // Маппинг дней недели к массиву времени
  periodStart: string; // Дата начала периода
  periodEnd: string; // Дата окончания периода
  lessonFormat: LessonFormatEnum;
  room: string; // Аудитория или ссылка на ресурс
}
