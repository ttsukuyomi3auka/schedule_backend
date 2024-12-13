import { TeacherEntity } from "../entities/teacher.entity";

export interface TeacherRepository {
  add(Teacher: Partial<TeacherEntity>): Promise<void>;
  findTeachers(): Promise<TeacherEntity[]>;
  searchByMessage(message: string): Promise<TeacherEntity[]>;
}
