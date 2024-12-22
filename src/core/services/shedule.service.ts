import { CreateScheduleEntryDTO } from "../entities/dtos/createScheduleEntry.dto";
import { ScheduleRecordEntity } from "../entities/scheduleRecord.entity";

export interface ScheduleService {
  getScheduleRecords(userId: string): Promise<ScheduleRecordEntity[]>;
  getScheduleRecordsByGroupNumber(groupNumber: number): Promise<ScheduleRecordEntity[]>;
  getScheduleRecordsByTeacherId(id: string): Promise<ScheduleRecordEntity[]>;
  createScheduleEntry(entry: CreateScheduleEntryDTO): Promise<boolean>;
}
