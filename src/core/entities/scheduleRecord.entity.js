export class ScheduleRecordEntity {
  constructor({
    id,
    target,
    discipline,
    teachers,
    type,
    date,
    time,
    building,
    room,
    scheduleEntryId,
  }) {
    this.id = id; // Уникальный идентификатор записи
    this.target = target; // Экземпляр TargetEntity
    this.discipline = discipline; // Название дисциплины
    this.teachers = teachers; // Преподаватель
    this.type = type; // Тип занятия (LECTURE, PRACTICE, LAB)
    this.date = date; // Конкретная дата занятия
    this.time = time; // Время занятия
    this.building = building; // Корпус, где проходит занятие
    this.room = room; // Аудитория
    this.scheduleEntryId = scheduleEntryId; //Айди родителя
  }
}
