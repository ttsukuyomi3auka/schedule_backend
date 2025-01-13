import { Request, Response } from "express";
import { container, DependencyKeys } from "../../../common/diContainer";

const authService = container.get(DependencyKeys.authService);

export const signInController = async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;
    const token = await authService.signIn(login, password);
    res.status(200).json(token);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
      return;
    }
    res.status(500).send("Произошла ошибка на сервере");
  }
};
