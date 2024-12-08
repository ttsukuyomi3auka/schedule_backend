import mongoose from "mongoose";
import { Converter } from "../../common/converter";
import { ScheduleEntryEntity } from "../../core/entities/scheduleEntry.entity";
import { IScheduleEntryModel } from "../models/scheduleEntry.model";

export class ScheduleEntryDataBaseConverter
  implements Converter<IScheduleEntryModel, ScheduleEntryEntity>
{
  toModel(entity: ScheduleEntryEntity): IScheduleEntryModel {
    const model: IScheduleEntryModel = {
      _id: entity.id ? new mongoose.Types.ObjectId(entity.id) : new mongoose.Types.ObjectId(),
      target: {
        type: entity.target.type,
        values: entity.target.values,
      },
      discipline: entity.discipline,
      teachers: entity.teachers,
      lessonType: entity.lessonType,
      daysAndTime: entity.daysAndTime,
      periodStart: entity.periodStart,
      periodEnd: entity.periodEnd,
      lessonFormat: entity.lessonFormat,
      room: entity.room,
    };
    return model;
  }

  toEntity(model: IScheduleEntryModel): ScheduleEntryEntity {
    const entity: ScheduleEntryEntity = {
      id: model._id.toString(),
      target: {
        type: model.target.type,
        values: model.target.values,
      },
      discipline: model.discipline,
      teachers: model.teachers,
      lessonType: model.lessonType,
      daysAndTime: model.daysAndTime,
      periodStart: model.periodStart,
      periodEnd: model.periodEnd,
      lessonFormat: model.lessonFormat,
      room: model.room,
    };
    return entity;
  }
}
