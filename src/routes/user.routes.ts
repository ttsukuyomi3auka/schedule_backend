import { Router, Request, Response } from "express";
import { UserServiceImpl } from "../infrastructure/services/user/user.service.impl";
import { UserService } from "../core/services/user/user.service";
const userRoutes = Router();

const userService: UserService = new UserServiceImpl();

userRoutes.post("/create", async (req: Request, res: Response) => {
  const { login, password } = req.body;
  try {
    const newUser = await userService.createUser(login, password);
    res.status(201).json(newUser);
  } catch (error) {
    error instanceof Error ? res.status(500).json({ message: error.message }) : res.status(500);
  }
});

export default userRoutes;
