import { Request, Response } from "express";
import { container, DependencyKeys } from "../../../common/diContainer";
import { ScheduleService } from "../../../core/services/schedule.service";

const scheduleService: ScheduleService = container.get(
  DependencyKeys.scheduleService
);

export const deleteScheduleEntryController = async (
  req: Request,
  res: Response
) => {
  try {
    await scheduleService.deleteScheduleEntry(req.params.id);
    res.status(200).send("Записи удалены");
  } catch (error) {
    error instanceof Error
      ? res.status(400).send(error.message)
      : res.status(500).send("Произошла ошибка на сервере");
  }
};
