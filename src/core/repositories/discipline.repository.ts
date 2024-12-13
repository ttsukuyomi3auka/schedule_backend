import { DisciplineEntity } from "../entities/discipline.entity";

export interface DisciplineRepository {
  add(discipline: Partial<DisciplineEntity>): Promise<void>;
  findDisciplines(): Promise<DisciplineEntity[]>;
}
