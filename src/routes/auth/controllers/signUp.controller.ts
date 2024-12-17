import { Request, Response } from "express";
import { container, DependencyKeys } from "../../../common/diContainer";

const authService = container.get(DependencyKeys.authService);

export const signUpController = async (req: Request, res: Response) => {
  try {
    const newUser = await authService.signUp(req.body);
    if (!newUser) {
      res.status(400).send("Ошибка регистрации!");
      return;
    }
    res.status(201).send("Регистрация прошла успешно!");
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
      return;
    }
    console.log(error);
    res.status(500).send("Произошла ошибка на сервере");
  }
};
