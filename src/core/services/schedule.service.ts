import { CreateScheduleEntryDTO } from "../entities/dtos/createScheduleEntry.dto";
import { ScheduleRecordEntity } from "../entities/scheduleRecord.entity";

export interface ScheduleService {
  createScheduleEntry(entry: CreateScheduleEntryDTO): Promise<boolean>;
  getScheduleRecords(userId: string): Promise<ScheduleRecordEntity[]>;
  getScheduleRecordsByGroupNumber(
    groupNumber: number
  ): Promise<ScheduleRecordEntity[]>;
  getScheduleRecordsByTeacherId(id: string): Promise<ScheduleRecordEntity[]>;

  updateScheduleEntry(dto: Partial<ScheduleRecordEntity>): Promise<void>;
  updateScheduleRecord(dto: Partial<ScheduleRecordEntity>): Promise<void>;

  deleteScheduleRecord(id: string): Promise<void>;
  deleteScheduleEntry(id: string): Promise<void>;
}
