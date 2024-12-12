import { model } from "mongoose";
import { GroupEntity } from "../../core/entities/group.entity";
import { GroupRepository } from "../../core/repositories/group.repository";
import { GroupModel } from "../models/group.model";

export class GroupRepositoryImpl implements GroupRepository {
  add(group: GroupEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findGroups(): Promise<GroupEntity[]> {
    const models = await GroupModel.find();
    if (!models) {
      throw new Error("Не удалось получить группы");
    }
    return models;
  }
  findGroupByNumber(number: number): Promise<GroupEntity> {
    throw new Error("Method not implemented.");
  }
}
