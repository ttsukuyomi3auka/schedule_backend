import { Request, Response } from "express";
import { container, DependencyKeys } from "../../../common/diContainer";

const authService = container.get(DependencyKeys.authService);

export const registerController = async (req: Request, res: Response) => {
  try {
    const { login, password, role, fullName, group } = req.body;

    const newUser = await authService.register({
      fullName: fullName,
      login: login,
      hasPassword: password,
      role: role,
      groupNumber: group ?? null,
    });
    if (!newUser) {
      res.status(400).send("Ошибка регистрации!");
      return;
    }
    res.status(201).send("Регистрация прошла успешно!");
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
      return;
    }
    console.log(error);
    res.status(500).send("Произошла ошибка на сервере.");
  }
};
