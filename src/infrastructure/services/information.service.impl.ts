import { DisciplineEntity } from "../../core/entities/discipline.entity";
import { GroupEntity } from "../../core/entities/group.entity";
import { DisciplineRepository } from "../../core/repositories/discipline.repository";
import { GroupRepository } from "../../core/repositories/group.repository";
import { InformationService } from "../../core/services/information.service";

export class InformationServiceImpl implements InformationService {
  constructor(
    private groupRepository: GroupRepository,
    private disciplineRepository: DisciplineRepository
  ) {}

  async addGroup(group: GroupEntity): Promise<void> {
    await this.groupRepository.add(group);
  }

  async getGroups(): Promise<GroupEntity[]> {
    const groups = await this.groupRepository.findGroups();
    if (groups.length === 0) {
      throw new Error("Групп ещё нет");
    }
    return groups;
  }

  async getGroupByNumber(number: number): Promise<GroupEntity> {
    const group = await this.groupRepository.findGroupByNumber(number);
    return group;
  }

  async addDiscipline(discipline: Partial<DisciplineEntity>): Promise<void> {
    await this.disciplineRepository.add(discipline);
  }
  async getDisciplines(): Promise<DisciplineEntity[]> {
    const disciplines = await this.disciplineRepository.findDisciplines();
    if (disciplines.length === 0) {
      throw new Error("Дисциплин ещё нет"); 
    }
    return disciplines;
  }
}
