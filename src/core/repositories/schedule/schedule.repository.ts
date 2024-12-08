import { ScheduleEntryEntity } from "../../entities/scheduleEntry.entity";
import { ScheduleRecordEntity } from "../../entities/scheduleRecord.entity";

export interface ScheduleRepository {
  //   getScheduleRecordsByEntryId(entryId: string): Promise<ScheduleRecordEntity[]>; // Получить записи по айди entry

  //   getSchedulesByGroupNumber(groupNumber: number): Promise<ScheduleRecordEntity[]>; // Получить расписание по номеру группы

  addScheduleEntry(entry: ScheduleEntryEntity): Promise<string>; // Добавить новую запись (возвращает ID)

  addScheduleRecord(record: ScheduleRecordEntity): Promise<string>; // Добавить конкретную запись (возвращает ID)

  //   updateScheduleEntry(
  //     entryId: string,
  //     updatedEntry: Partial<ScheduleEntryEntity>
  //   ): Promise<boolean>; // Изменить entry запись

  //   updateScheduleRecord(
  //     recordId: string,
  //     updatedRecord: Partial<ScheduleRecordEntity>
  //   ): Promise<boolean>; // Изменить конкретную запись

  //   deleteScheduleEntry(entryId: string): Promise<boolean>; // Удалить запись расписания

  //   deleteScheduleRecord(recordId: string): Promise<boolean>; // Удалить конкретную запись расписания
}
