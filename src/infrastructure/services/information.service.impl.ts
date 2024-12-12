import { GroupEntity } from "../../core/entities/group.entity";
import { GroupRepository } from "../../core/repositories/group.repository";
import { InformationService } from "../../core/services/information.service";

export class InformationServiceImpl implements InformationService {
  constructor(private groupRepository: GroupRepository) {}
  async addGroup(group: GroupEntity): Promise<void> {
    await this.groupRepository.add(group);
  }

  async getGroups(): Promise<GroupEntity[]> {
    const groups = await this.groupRepository.findGroups();
    if (groups.length === 0) {
      throw new Error("Группы не найдены");
    }
    return groups;
  }
}
