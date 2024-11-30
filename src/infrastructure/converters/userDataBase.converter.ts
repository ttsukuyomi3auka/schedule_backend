import mongoose from "mongoose";
import { Converter } from "../../common/converter";
import { UserEntity } from "../../core/entities/user.entity";
import { IUserDataBaseModel } from "../models/user.model";

export class UserDataBaseConverter implements Converter<IUserDataBaseModel, UserEntity> {
  toModel(entity: UserEntity): IUserDataBaseModel {
    const model: IUserDataBaseModel = {
      //? если айди ещё нет то создадим новое, если уже есть то просто преобразуем
      _id: entity.userId
        ? new mongoose.Types.ObjectId(entity.userId)
        : new mongoose.Types.ObjectId(),
      fullName: entity.fullName,
      login: entity.login,
      hasPassword: entity.hasPassword,
      role: entity.role,
      groupNumber: entity.groupNumber,
    };
    return model;
  }
  toEntity(model: IUserDataBaseModel): UserEntity {
    const entity: UserEntity = {
      userId: model._id.toString(),
      fullName: model.fullName,
      login: model.login,
      hasPassword: model.hasPassword,
      role: model.role,
      groupNumber: model.groupNumber,
    };
    return entity;
  }
}
