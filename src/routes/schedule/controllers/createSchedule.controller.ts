import { Request, Response } from "express";
import { container, DependencyKeys } from "../../../common/diContainer";
import { CreateScheduleEntryDTO } from "../../../core/entities/dtos/createScheduleEntry.dto";
import { ScheduleService } from "../../../core/services/shedule.service";

const scheduleService: ScheduleService = container.get(DependencyKeys.scheduleService);

export const createScheduleController = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const data: CreateScheduleEntryDTO = req.body;
    await scheduleService.createScheduleEntry(data);
    res.status(201).send("Расписание добавлено");
  } catch (error) {
    error instanceof Error
      ? res.status(400).send(error.message)
      : res.status(500).send("Произошла ошибка на сервере");
  }
};
