import { DisciplineEntity } from "./discipline.entity";
import { LessonFormatEnum } from "./enums/lessonFormat.enum";
import { LessonTypeEnum } from "./enums/lessonType.enum";
import { TargetEntity } from "./target.entity";
import { TeacherEntity } from "./teacher.entity";

export interface ScheduleRecordEntity {
  id: string; // Уникальный идентификатор записи
  target: TargetEntity; // Экземпляр TargetEntity
  discipline: DisciplineEntity; // Название дисциплины
  teachers: TeacherEntity[]; // Преподаватель
  lessonType: LessonTypeEnum; // Тип занятия
  date: Date; // Конкретная дата занятия
  day: number; //Номер дня недели [1-пн, 2-вт, 3-ср, 4-чт, 5-пт, 6-сб, 7-вс]
  time: number; // Время занятия
  lessonFormat: LessonFormatEnum;
  room: string; // Аудитория или сслыка
  scheduleEntryId: string; // Айди родителя
}

//? время учебы [0-8:00-9:30, 1-9:45-11:15, 2-11:30-13:00, 3-13:30-15:00, 4-15:15-16-45, 5-17:00-18:30, 6-18:45-20:15, 7-20:30-22:00 ]
//? дни недели [1-пн, 2-вт, 3-ср, 4-чт, 5-пт, 6-сб, 0-вс]
