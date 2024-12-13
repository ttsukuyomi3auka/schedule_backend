import { DisciplineEntity } from "../entities/discipline.entity";
import { GroupEntity } from "../entities/group.entity";
import { TeacherEntity } from "../entities/teacher.entity";

export interface InformationService {
  getGroups(): Promise<GroupEntity[]>;
  addGroup(group: GroupEntity): Promise<void>;
  getGroupByNumber(number: number): Promise<GroupEntity>;
  seacrchGroupByMessage(message: string): Promise<GroupEntity[]>;

  addDiscipline(discipline: Partial<DisciplineEntity>): Promise<void>;
  getDisciplines(): Promise<DisciplineEntity[]>;
  searchDisciplineByMessage(message: string): Promise<DisciplineEntity[]>;

  addTeacher(teacher: Partial<TeacherEntity>): Promise<void>;
  getTeachers(): Promise<TeacherEntity[]>;
  searchTeacherByMessage(message: string): Promise<TeacherEntity[]>;
}
