import { Request, Response } from "express";
import { container, DependencyKeys } from "../../../common/diContainer";
import { UserService } from "../../../core/services/user.service";

const userService: UserService = container.get(DependencyKeys.userService);

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const userData = req.user;
    if (!userData || !userData.userId) {
      throw new Error("Ошибка сервера!");
    }
    await userService.updateUser(userData, req.body);
    res.status(200).send("Данные обновлены");
  } catch (error) {
    error instanceof Error
      ? res.status(400).send(error.message)
      : res.status(500).send("Произошла ошибка на сервере");
  }
};
