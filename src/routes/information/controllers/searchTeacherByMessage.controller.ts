import { Request, Response } from "express";
import { container, DependencyKeys } from "../../../common/diContainer";
import { InformationService } from "../../../core/services/information.service";

const informationService: InformationService = container.get(DependencyKeys.informationService);

export const searchTeachersByMessageController = async (req: Request, res: Response) => {
  try {
    const teachers = await informationService.searchTeacherByMessage(req.body.message);
    res.status(200).json(teachers);
  } catch (error) {
    error instanceof Error
      ? res.status(400).send(error.message)
      : res.status(500).send("Произошла ошибка на сервере");
  }
};
