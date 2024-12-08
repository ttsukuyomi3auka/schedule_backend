import { DisciplineEntity } from "./discipline.entity";
import { LessonFormatEnum } from "./enums/lessonFormat.enum";
import { LessonTypeEnum } from "./enums/lessonType.enum";
import { TargetEntity } from "./target.entity";
import { TeacherEntity } from "./teacher.entity";

export interface ScheduleEntryEntity {
  id: string; // Уникальный идентификатор записи
  target: TargetEntity; // Целевая аудитория (группа/факультет/весь универ)
  discipline: DisciplineEntity; // Название дисциплины
  teachers: TeacherEntity[]; // Массив преподавателей
  lessonType: LessonTypeEnum; // Тип занятия
  daysAndTime: Record<number, number[]>; // Маппинг дней недели к массиву времени
  periodStart: Date; // Дата начала периода
  periodEnd: Date; // Дата окончания периода
  lessonFormat: LessonFormatEnum;
  room: string; // Аудитория или ссылка на ресурс
}
