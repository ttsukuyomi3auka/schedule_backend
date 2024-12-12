import { ScheduleEntryEntity } from "../../core/entities/scheduleEntry.entity";
import { ScheduleRecordEntity } from "../../core/entities/scheduleRecord.entity";
import { ScheduleRepository } from "../../core/repositories/schedule.repository";
import { ScheduleEntryDataBaseConverter } from "../converters/scheduleEntryDataBase.converter";
import { ScheduleRecordDataBaseConverter } from "../converters/scheduleRecordDataBase.converter";
import { ScheduleEntryModel } from "../models/scheduleEntry.model";
import { ScheduleRecordModel } from "../models/scheduleRecord.model";

export class ScheduleRepositoryImpl implements ScheduleRepository {
  constructor(
    private scheduleRecordDataBaseConverter: ScheduleRecordDataBaseConverter,
    private scheduleEntryDataBaseConverter: ScheduleEntryDataBaseConverter
  ) {}

  async addScheduleEntry(entry: ScheduleEntryEntity): Promise<ScheduleEntryEntity> {
    const newScheduleEntryModel = this.scheduleEntryDataBaseConverter.toModel(entry);
    const savedModel = await new ScheduleEntryModel(newScheduleEntryModel).save();
    if (!savedModel) {
      throw new Error("Не удалось добавить запись о расписании в базу");
    }
    return this.scheduleEntryDataBaseConverter.toEntity(savedModel);
  }
  async addScheduleRecord(record: ScheduleRecordEntity): Promise<boolean> {
    const newScheduleRecord = this.scheduleRecordDataBaseConverter.toModel(record);
    const saved = await new ScheduleRecordModel(newScheduleRecord).save();
    if (!saved) {
      throw new Error("Не удалось добавить запись занятия в базу");
    }
    return true;
  }

  async findRecordByDateAndTime(date: string, time: number): Promise<ScheduleRecordEntity | null> {
    const model = await ScheduleRecordModel.findOne({ date, time }).exec();
    if (!model) {
      return null;
    }
    const entity = this.scheduleRecordDataBaseConverter.toEntity(model);
    return entity;
  }
}
