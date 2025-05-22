import { Request, Response } from "express";
import { ScheduleEntryModel } from "../../../infrastructure/models/scheduleEntry.model";


//TODO удалить это потом
export const getScheduleEntryController = async (
  req: Request,
  res: Response
) => {
  try {
    const model = await ScheduleEntryModel.findById(req.body.id);
    res.status(200).json(model);
  } catch (error) {
    error instanceof Error
      ? res.status(400).send(error.message)
      : res.status(500).send("Произошла ошибка на сервере");
  }
};
