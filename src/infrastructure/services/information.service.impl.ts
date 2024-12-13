import { DisciplineEntity } from "../../core/entities/discipline.entity";
import { GroupEntity } from "../../core/entities/group.entity";
import { TeacherEntity } from "../../core/entities/teacher.entity";
import { DisciplineRepository } from "../../core/repositories/discipline.repository";
import { GroupRepository } from "../../core/repositories/group.repository";
import { TeacherRepository } from "../../core/repositories/teacher.repository";
import { InformationService } from "../../core/services/information.service";

export class InformationServiceImpl implements InformationService {
  constructor(
    private groupRepository: GroupRepository,
    private disciplineRepository: DisciplineRepository,
    private teacherRepostitory: TeacherRepository
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
  async seacrchGroupByMessage(message: string): Promise<GroupEntity[]> {
    const groups = await this.groupRepository.searchByMessage(message);
    if (groups.length === 0) throw new Error("Не удалось найти подходящие группы");

    return groups;
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

  async searchDisciplineByMessage(message: string): Promise<DisciplineEntity[]> {
    const disciplines = await this.disciplineRepository.searchByMessage(message);
    if (disciplines.length === 0) throw new Error("Не удалось найти подходящие дисциплины");
    return disciplines;
  }

  async addTeacher(teacher: Partial<TeacherEntity>): Promise<void> {
    await this.teacherRepostitory.add(teacher);
  }
  async getTeachers(): Promise<TeacherEntity[]> {
    const teachers = await this.teacherRepostitory.findTeachers();
    if (teachers.length === 0) throw new Error("Преподавателей ещё нет в базе");

    return teachers;
  }

  async searchTeacherByMessage(message: string): Promise<TeacherEntity[]> {
    const teachers = await this.teacherRepostitory.searchByMessage(message);
    if (teachers.length === 0) throw new Error("Не удалось найти подходящих преподователей");
    return teachers;
  }
}
