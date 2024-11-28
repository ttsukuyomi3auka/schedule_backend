import { Converter } from "../../common/converter";
import { UserEntity } from "../../core/entities/user.entity";
import { IUserDataBaseModel } from "../models/user.model";

export class UserDataBaseConverter implements Converter<IUserDataBaseModel, UserEntity> {
  toModel(entity: UserEntity): IUserDataBaseModel {
    const model: IUserDataBaseModel = {
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
      fullName: model.fullName,
      login: model.login,
      hasPassword: model.hasPassword,
      role: model.role,
      groupNumber: model.groupNumber,
    };
    return entity;
  }
}
