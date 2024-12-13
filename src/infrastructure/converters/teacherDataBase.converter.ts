import mongoose from "mongoose";
import { Converter } from "../../common/converter";
import { ITeacherModel } from "../models/teacher.model";
import { TeacherEntity } from "../../core/entities/teacher.entity";

export class TeacherDataBaseConverter implements Converter<ITeacherModel, TeacherEntity> {
  toModel(entity: TeacherEntity): ITeacherModel {
    const model: ITeacherModel = {
      _id: entity.id ? new mongoose.Types.ObjectId(entity.id) : new mongoose.Types.ObjectId(),
      fullName: entity.fullName,
    };
    return model;
  }
  toEntity(model: ITeacherModel): TeacherEntity {
    const entity: TeacherEntity = {
      id: model._id.toString(),
      fullName: model.fullName,
    };
    return entity;
  }
}
