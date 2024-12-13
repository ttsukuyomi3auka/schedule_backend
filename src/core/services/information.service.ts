import { GroupEntity } from "../entities/group.entity";

export interface InformationService {
  getGroups(): Promise<GroupEntity[]>;
  addGroup(group: GroupEntity): Promise<void>;
  getGroupByNumber(number: number): Promise<GroupEntity>;
}
