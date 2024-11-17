import { DisciplineEntity } from "./discipline.entity";
import { LessonTypeEnum } from "./enums/lessonType.enum";
import { TargetEntity } from "./target.entity";
import { TeacherEntity } from "./teacher.entity";

export class ScheduleEntryEntity {
  id: string; // Уникальный идентификатор записи
  target: TargetEntity; // Целевая аудитория (группа/факультет/весь универ)
  discipline: DisciplineEntity; // Название дисциплины
  teachers: TeacherEntity[]; // Массив преподавателей
  lessonType: LessonTypeEnum; // Тип занятия
  days: string[]; // Массив дней недели
  time: string; // Время проведения
  periodStart: Date; // Дата начала периода
  periodEnd: Date; // Дата окончания периода
  building: string; // Корпус, где проходит занятие
  room: string; // Аудитория

  constructor({
    id,
    target,
    discipline,
    teachers,
    lessonType,
    days,
    time,
    periodStart,
    periodEnd,
    building,
    room,
  }: {
    id: string;
    target: TargetEntity;
    discipline: DisciplineEntity;
    teachers: TeacherEntity[];
    lessonType: LessonTypeEnum;
    days: string[];
    time: string;
    periodStart: Date;
    periodEnd: Date;
    building: string;
    room: string;
  }) {
    this.id = id;
    this.target = target;
    this.discipline = discipline;
    this.teachers = teachers;
    this.lessonType = lessonType;
    this.days = days;
    this.time = time;
    this.periodStart = periodStart;
    this.periodEnd = periodEnd;
    this.building = building;
    this.room = room;
  }
}
