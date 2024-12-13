import { GroupEntity } from "../entities/group.entity";

export interface GroupRepository {
  add(group: GroupEntity): Promise<void>;
  findGroups(): Promise<GroupEntity[]>;
  findGroupByNumber(number: number): Promise<GroupEntity>;
  searchByMessage(message: string): Promise<GroupEntity[]>;
}
