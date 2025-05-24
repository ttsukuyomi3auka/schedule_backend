import { ScheduleEntryEntity } from "../entities/scheduleEntry.entity";
import { ScheduleRecordEntity } from "../entities/scheduleRecord.entity";

export interface ScheduleRepository {
  addScheduleEntry(entry: ScheduleEntryEntity): Promise<ScheduleEntryEntity>;
  addScheduleRecord(record: ScheduleRecordEntity): Promise<boolean>;

  findRecordEntryById(id: string): Promise<ScheduleEntryEntity>;
  findRecordsByGroupNumber(number: number): Promise<ScheduleRecordEntity[]>;
  findRecordByDateAndTime(
    date: string,
    time: number
  ): Promise<ScheduleRecordEntity | null>;
  findRecordsByTeacherFullName(
    fullName: string
  ): Promise<ScheduleRecordEntity[]>;
  findRecordsByEntryId(id: string): Promise<ScheduleRecordEntity[]>;

  updateScheduleEntry(dto: Partial<ScheduleRecordEntity>): Promise<void>;
  updateScheduleRecord(dto: Partial<ScheduleRecordEntity>): Promise<void>;

  deleteScheduleRecord(id: string): Promise<void>;
  deleteScheduleRecordByEntryId(id: string): Promise<void>;
  deleteScheduleEntry(id: string): Promise<void>;
}

