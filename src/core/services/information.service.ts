import { GroupEntity } from "../entities/group.entity";

export interface InformationService {
  getGroups(): Promise<GroupEntity[] | null>;
}
