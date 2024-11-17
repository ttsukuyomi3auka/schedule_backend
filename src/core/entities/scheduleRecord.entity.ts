import { DisciplineEntity } from "./discipline.entity";
import { LessonTypeEnum } from "./enums/lessonType.enum";
import { TargetEntity } from "./target.entity";
import { TeacherEntity } from "./teacher.entity";

export class ScheduleRecordEntity {
  id: string; // Уникальный идентификатор записи
  target: TargetEntity; // Экземпляр TargetEntity
  discipline: DisciplineEntity; // Название дисциплины
  teachers: TeacherEntity[]; // Преподаватель
  lessonType: LessonTypeEnum; // Тип занятия
  date: Date; // Конкретная дата занятия
  time: string; // Время занятия
  building: string; // Корпус, где проходит занятие
  room: string; // Аудитория
  scheduleEntryId: string; // Айди родителя

  constructor({
    id,
    target,
    discipline,
    teachers,
    lessonType,
    date,
    time,
    building,
    room,
    scheduleEntryId,
  }: {
    id: string;
    target: TargetEntity;
    discipline: DisciplineEntity;
    teachers: TeacherEntity[];
    lessonType: LessonTypeEnum;
    date: Date;
    time: string;
    building: string;
    room: string;
    scheduleEntryId: string;
  }) {
    this.id = id;
    this.target = target;
    this.discipline = discipline;
    this.teachers = teachers;
    this.lessonType = lessonType;
    this.date = date;
    this.time = time;
    this.building = building;
    this.room = room;
    this.scheduleEntryId = scheduleEntryId;
  }
}
