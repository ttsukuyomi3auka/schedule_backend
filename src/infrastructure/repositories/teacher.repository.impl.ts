import { TeacherEntity } from "../../core/entities/teacher.entity";
import { TeacherRepository } from "../../core/repositories/teacher.repository";
import { TeacherDataBaseConverter } from "../converters/teacherDataBase.converter";
import { TeacherModel } from "../models/teacher.model";

export class TeacherRepositoryImpl implements TeacherRepository {
  constructor(private teacherDataBaseConverter: TeacherDataBaseConverter) {}

  async add(Teacher: Partial<TeacherEntity>): Promise<void> {
    const model = await new TeacherModel(Teacher).save();
    if (!model) {
      throw new Error("Не удалось добавить преподавателя");
    }
  }
  async findTeachers(): Promise<TeacherEntity[]> {
    const models = await TeacherModel.find();
    if (!models) throw new Error("Не удалось получить преподавателей");
    const entities = models.map((model) => this.teacherDataBaseConverter.toEntity(model));
    return entities;
  }

  async searchByMessage(message: string): Promise<TeacherEntity[]> {
    const models = await TeacherModel.find({
      fullName: { $regex: message, $options: "i" },
    });

    if (!models) {
      throw new Error("Ошибка при поиске");
    }
    return models.map((model) => this.teacherDataBaseConverter.toEntity(model));
  }
}
