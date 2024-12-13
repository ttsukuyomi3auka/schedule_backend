import { ScheduleEntryEntity } from "../entities/scheduleEntry.entity";
import { ScheduleRecordEntity } from "../entities/scheduleRecord.entity";

export interface ScheduleRepository {
  addScheduleEntry(entry: ScheduleEntryEntity): Promise<ScheduleEntryEntity>;
  addScheduleRecord(record: ScheduleRecordEntity): Promise<boolean>;
  findRecordsByGroupNumber(number: number): Promise<ScheduleRecordEntity[]>;
  findRecordByDateAndTime(date: string, time: number): Promise<ScheduleRecordEntity | null>;
}
