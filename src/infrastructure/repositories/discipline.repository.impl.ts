import { DisciplineRepository } from "../../core/repositories/discipline.repository";
import { DisciplineEntity } from "../../core/entities/discipline.entity";
import { DisciplineDataBaseConverter } from "../converters/disciplineDataBase.converter";
import { DisciplineModel } from "../models/discipline.model";

export class DisciplineRepositoryImpl implements DisciplineRepository {
  constructor(private disciplineDataBaseConverter: DisciplineDataBaseConverter) {}
  async add(discipline: Partial<DisciplineEntity>): Promise<void> {
    const model = await new DisciplineModel(discipline).save();
    if (!model) {
      throw new Error("Не удалось добавить дисциплину");
    }
  }
  async findDisciplines(): Promise<DisciplineEntity[]> {
    const models = await DisciplineModel.find();
    if (!models) throw new Error("Не удалось получить дисциплины");
    const entities = models.map((model) => this.disciplineDataBaseConverter.toEntity(model));
    return entities;
  }
}
