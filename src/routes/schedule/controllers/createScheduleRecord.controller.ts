import { Request, Response } from "express";
import { container, DependencyKeys } from "../../../common/diContainer";
import { ScheduleService } from "../../../core/services/schedule.service";
import { CreateScheduleRecordDTO } from "../../../core/entities/dtos/createScheduleRecord.dto";

const scheduleService: ScheduleService = container.get(
  DependencyKeys.scheduleService
);

export const createScheduleRecordController = async (
  req: Request,
  res: Response
) => {
  try {
    const data: CreateScheduleRecordDTO = req.body;
    await scheduleService.createScheduleRecord(data);
    res.status(201).send("Запись добавлена");
  } catch (error) {
    console.log(error);
    error instanceof Error
      ? res.status(400).send(error.message)
      : res.status(500).send("Произошла ошибка на сервере");
  }
};
