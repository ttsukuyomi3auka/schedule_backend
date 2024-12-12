import { Request, Response } from "express";
import { container, DependencyKeys } from "../../../common/diContainer";
import { InformationService } from "../../../core/services/information.service";

const informationService: InformationService = container.get(DependencyKeys.informationService);

export const addGroupController = async (req: Request, res: Response) => {
  try {
    await informationService.addGroup(req.body);
    res.status(201).send("Группа успешно добавлена");
  } catch (error) {
    error instanceof Error
      ? res.status(400).send(error.message)
      : res.status(500).send("Произошла ошибка на сервере");
  }
};
