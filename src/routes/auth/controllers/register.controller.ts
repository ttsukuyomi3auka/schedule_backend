import { Request, Response } from "express";
import { AuthService } from "../../../core/services/auth/auth.service";
import { AuthServiceImpl } from "../../../infrastructure/services/auth/auth.service.impl";

const authService: AuthService = new AuthServiceImpl();

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
      return res.status(400).send("Ошибка регистрации!");
    }

    return res.status(201).send("Регистрация прошла успещно!");
  } catch (error) {
    error instanceof Error ? res.status(500).json({ message: error.message }) : res.status(500);
  }
};
