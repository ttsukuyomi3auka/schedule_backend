import { LessonFormatEnum } from "../enums/lessonFormat.enum";
import { LessonTypeEnum } from "../enums/lessonType.enum";
import { TargetEntity } from "../target.entity";

export interface CreateScheduleEntryDTO {
  target: TargetEntity; // Целевая аудитория (группа/факультет/весь универ)
  discipline: string;
  teacher: string[];
  lessonType: LessonTypeEnum;
  daysAndTime: Record<number, number[]>; // Маппинг дней недели к массиву времени
  periodStart: string; // Date.toString()
  periodEnd: string; // Date.toString()
  lessonFormat: LessonFormatEnum;
  room: string;
}
