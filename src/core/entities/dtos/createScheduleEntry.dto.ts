import { LessonFormatEnum } from "../enums/lessonFormat.enum";
import { LessonTypeEnum } from "../enums/lessonType.enum";
import { TargetEntity } from "../target.entity";

export interface CreateScheduleEntryDTO {
  target: TargetEntity;
  discipline: string;
  teacher: string[];
  lessonType: LessonTypeEnum;
  daysAndTime: Record<number, number[]>;
  periodStart: string;
  periodEnd: string;
  lessonFormat: LessonFormatEnum;
  room: string;
}
