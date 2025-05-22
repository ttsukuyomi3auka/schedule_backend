import { Request, Response } from "express";
import { container, DependencyKeys } from "../../../common/diContainer";
import { ScheduleService } from "../../../core/services/shedule.service";

const scheduleService: ScheduleService = container.get(
  DependencyKeys.scheduleService
);

export const updateScheduleRecordController = async (
  req: Request,
  res: Response
) => {
  try {
    await scheduleService.updateScheduleRecord(req.body);
    res.status(200).send("Запись обновлена");
  } catch (error) {
    error instanceof Error
      ? res.status(400).send(error.message)
      : res.status(500).send("Произошла ошибка на сервере");
  }
};
