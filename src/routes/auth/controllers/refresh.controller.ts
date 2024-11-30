import { Request, Response } from "express";
import { container, DependencyKeys } from "../../../common/diContainer";

const authService = container.get(DependencyKeys.authService);

export const refreshController = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;
    const token = await authService.refresh(refreshToken);
    res.status(200).json(token);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
      return;
    }
    console.log(error);
    res.status(500).send("Произошла ошибка на сервере.");
  }
};
