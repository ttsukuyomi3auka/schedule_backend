import mongoose from "mongoose";
import { Converter } from "../../common/converter";
import { ScheduleRecordEntity } from "../../core/entities/scheduleRecord.entity";
import { IScheduleRecordModel } from "../models/scheduleRecord.model";

export class ScheduleRecordDataBaseConverter
  implements Converter<IScheduleRecordModel, ScheduleRecordEntity>
{
  toModel(entity: ScheduleRecordEntity): IScheduleRecordModel {
    const model: IScheduleRecordModel = {
      _id: entity.id ? new mongoose.Types.ObjectId(entity.id) : new mongoose.Types.ObjectId(),
      target: {
        type: entity.target.type,
        values: entity.target.values,
      },
      discipline: entity.discipline,
      teachers: entity.teachers,
      lessonType: entity.lessonType,
      date: entity.date,
      day: entity.day,
      time: entity.time,
      lessonFormat: entity.lessonFormat,
      room: entity.room,
      scheduleEntryId: entity.scheduleEntryId,
    };
    return model;
  }

  toEntity(model: IScheduleRecordModel): ScheduleRecordEntity {
    const entity: ScheduleRecordEntity = {
      id: model._id.toString(),
      target: {
        type: model.target.type,
        values: model.target.values,
      },
      discipline: model.discipline,
      teachers: model.teachers,
      lessonType: model.lessonType,
      date: model.date,
      day: model.day,
      time: model.time,
      lessonFormat: model.lessonFormat,
      room: model.room,
      scheduleEntryId: model.scheduleEntryId.toString(),
    };
    return entity;
  }
}
