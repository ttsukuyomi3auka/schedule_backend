import mongoose from "mongoose";
import { Converter } from "../../common/converter";
import { DisciplineEntity } from "../../core/entities/discipline.entity";
import { IDisciplineModel } from "../models/discipline.model";

export class DisciplineDataBaseConverter implements Converter<IDisciplineModel, DisciplineEntity> {
  toModel(entity: DisciplineEntity): IDisciplineModel {
    const model: IDisciplineModel = {
      _id: entity.id ? new mongoose.Types.ObjectId(entity.id) : new mongoose.Types.ObjectId(),
      name: entity.name,
    };

    return model;
  }
  toEntity(model: IDisciplineModel): DisciplineEntity {
    const entity: DisciplineEntity = {
      id: model._id.toString(),
      name: model.name,
    };
    return entity;
  }
}
