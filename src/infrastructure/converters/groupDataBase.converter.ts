import { Converter } from "../../common/converter";
import { IGroupModel } from "../models/group.model";
import { GroupEntity } from "../../core/entities/group.entity";

export class GroupDataBaseConverter implements Converter<IGroupModel, GroupEntity> {
  toModel(entity: GroupEntity): IGroupModel {
    const model: IGroupModel = {
      number: entity.number,
      direction: entity.direction,
      profile: entity.profile,
    };
    return model;
  }
  toEntity(model: IGroupModel): GroupEntity {
    const entity: GroupEntity = {
      number: model.number,
      direction: model.direction,
      profile: model.profile,
    };
    return entity;
  }
}
