import { GroupEntity } from "../../core/entities/group.entity";
import { GroupRepository } from "../../core/repositories/group.repository";
import { GroupModel } from "../models/group.model";
import { GroupDataBaseConverter } from "../converters/groupDataBase.converter";

export class GroupRepositoryImpl implements GroupRepository {
  constructor(private groupDataBaseConverter: GroupDataBaseConverter) {}

  async add(group: GroupEntity): Promise<void> {
    const model = await new GroupModel(this.groupDataBaseConverter.toModel(group)).save();
    if (!model) {
      throw new Error("Не удалось добавить группу");
    }
  }
  async findGroups(): Promise<GroupEntity[]> {
    const models = await GroupModel.find();
    if (!models) {
      throw new Error("Не удалось получить группы");
    }
    const entities = models.map((model) => this.groupDataBaseConverter.toEntity(model));
    return entities;
  }
  async findGroupByNumber(number: number): Promise<GroupEntity> {
    const model = await GroupModel.findOne({ number: number });
    if (!model) throw new Error("Не удалось получить информацию о группе");
    return this.groupDataBaseConverter.toEntity(model);
  }
}
