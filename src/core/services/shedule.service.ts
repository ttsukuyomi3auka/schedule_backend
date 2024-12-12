import { CreateScheduleEntryDTO } from "../entities/dtos/createScheduleEntry.dto";

export interface ScheduleService {
  //   getAllSchedules(): Promise<ScheduleEntryEntity[]>; // Получить все расписание (например, для администраторов)

  //   getScheduleByGroupNumber(groupNumber: number): Promise<ScheduleRecordEntity[]>; // Получить расписание для группы

  createScheduleEntry(entry: CreateScheduleEntryDTO): Promise<boolean>; // Добавить новую запись расписания

  //   createScheduleRecord(record: ScheduleRecordEntity): Promise<string>; // Добавить конкретную запись

  //   updateScheduleEntry(
  //     entryId: string,
  //     updatedEntry: Partial<ScheduleEntryEntity>
  //   ): Promise<boolean>; // Изменить существующую запись расписания

  //   updateScheduleRecord(
  //     recordId: string,
  //     updatedRecord: Partial<ScheduleRecordEntity>
  //   ): Promise<boolean>; // Изменить конкретную запись расписания

  //   deleteScheduleEntry(entryId: string): Promise<boolean>; // Удалить запись расписания (вместе с зависимыми записями)

  //   deleteScheduleRecord(recordId: string): Promise<boolean>; // Удалить конкретную запись расписания
}
