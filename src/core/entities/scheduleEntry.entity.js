export class ScheduleEntryEntity {
  constructor({
    id,
    target,
    discipline,
    teachers,
    type,
    days,
    time,
    periodStart,
    periodEnd,
    building,
    room,
  }) {
    this.id = id; // Уникальный идентификатор записи
    this.target = target; // Целевая аудитория (группа/факультет/весь универ)
    this.discipline = discipline; // Название дисциплины
    this.teachers = teachers; // Массив преподавателей
    this.type = type; // Тип занятия (LECTURE, PRACTICE, LAB)
    this.days = days; // Массив дней недели
    this.time = time; // Время проведения
    this.periodStart = periodStart; // Дата начала периода
    this.periodEnd = periodEnd; // Дата окончания периода
    this.building = building; // Корпус, где проходит занятие
    this.room = room; // Аудитория

  }
}
