import { Request, Response } from "express";
import { UserService } from "../../../core/services/user/user.service";
import { UserServiceImpl } from "../../../infrastructure/services/user/user.service.impl";

//TODO нужно как-то от этого избавиться
const userService: UserService = new UserServiceImpl();

export const createUserController = async (req: Request, res: Response) => {
  const { login, password } = req.body;
  try {
    const newUser = await userService.createUser(login, password);
    res.status(201).json(newUser);
  } catch (error) {
    error instanceof Error ? res.status(500).json({ message: error.message }) : res.status(500);
  }
};
