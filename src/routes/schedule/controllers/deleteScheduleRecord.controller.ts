import { Request, Response } from "express";
import { container, DependencyKeys } from "../../../common/diContainer";
import { ScheduleService } from "../../../core/services/schedule.service";

const scheduleService: ScheduleService = container.get(
  DependencyKeys.scheduleService
);

export const deleteScheduleRecordController = async (
  req: Request,
  res: Response
) => {
  try {
    await scheduleService.deleteScheduleRecord(req.params.id);
    res.status(200).send("Запись удалена");
  } catch (error) {
    error instanceof Error
      ? res.status(400).send(error.message)
      : res.status(500).send("Произошла ошибка на сервере");
  }
};
