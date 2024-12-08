import { ScheduleEntryEntity } from "../../../core/entities/scheduleEntry.entity";
import { ScheduleRecordEntity } from "../../../core/entities/scheduleRecord.entity";
import { ScheduleRepository } from "../../../core/repositories/schedule/schedule.repository";

export class ScheduleRepositoryImpl implements ScheduleRepository {
  addScheduleEntry(entry: ScheduleEntryEntity): Promise<string> {
    throw new Error("Method not implemented.");
  }
  addScheduleRecord(record: ScheduleRecordEntity): Promise<string> {
    throw new Error("Method not implemented.");
  }
}
