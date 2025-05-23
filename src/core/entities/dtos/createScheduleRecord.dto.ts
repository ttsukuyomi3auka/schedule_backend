import { LessonFormatEnum } from "../enums/lessonFormat.enum";
import { LessonTypeEnum } from "../enums/lessonType.enum";
import { TargetEntity } from "../target.entity";

export interface CreateScheduleRecordDTO {
  target: TargetEntity;
  discipline: string;
  teachers: string[];
  lessonType: LessonTypeEnum;
  date: string;
  day: number;
  time: number;
  lessonFormat: LessonFormatEnum;
  room: string;
}
