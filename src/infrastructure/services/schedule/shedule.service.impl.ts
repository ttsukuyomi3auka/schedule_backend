import { CreateScheduleEntryDTO } from "../../../core/entities/dtos/createScheduleEntry.dto";
import { ScheduleRepository } from "../../../core/repositories/schedule/schedule.repository";
import { ScheduleService } from "../../../core/services/shedule/shedule.service";

export class ScheduleServiceImpl implements ScheduleService {
  constructor(private scheduleRepository: ScheduleRepository) {}
  createScheduleEntry(entry: CreateScheduleEntryDTO): Promise<string> {
    throw new Error("Method not implemented.");
  }
}
