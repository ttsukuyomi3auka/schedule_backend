//? Словарь для времени занятий
const timeSlots = [
  "8:00-9:30",
  "9:45-11:15",
  "11:30-13:00",
  "13:30-15:00",
  "15:15-16:45",
  "17:00-18:30",
  "18:45-20:15",
  "20:30-22:00",
];

//? Словарь для дней недели
const weekDays: Record<number, string> = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  0: "Воскресенье",
};

export function getTimeFromIndex(timeIndex: number): string {
  return timeSlots[timeIndex] || "Неверное время";
}

export function getDayFromIndex(dayIndex: number): string {
  return weekDays[dayIndex] || "Неверный день";
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
}
