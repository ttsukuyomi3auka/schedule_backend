import { Request, Response } from "express";
import { UserService } from "../../../core/services/user/user.service";
import { container, DependencyKeys } from "../../../common/diContainer";

const userService: UserService = container.get(DependencyKeys.userService);

export const getMeController = async (req: Request, res: Response) => {
  try {
    const userData = req.user;
    if (!userData || !userData.userId) {
      throw new Error("Ошибка сервера!");
    }
    const user = await userService.getMe(userData.userId);
    res.status(201).json(user);
  } catch (error) {
    error instanceof Error ? res.status(500).json({ message: error.message }) : res.status(500);
  }
};
