import { Router, Request, Response } from "express";
import { UserService } from "../core/services/user/user.service";
import { container } from "../common/diContainer";
const userRoutes = Router();

// userRoutes.post("/create", async (req: Request, res: Response) => {
//   const { login, password } = req.body;
//   try {
//     const userService = container.get<UserService>();
//     const newUser = await userService.createUser(login, password);
//     res.status(201).json(newUser);
//   } catch (error) {
//     error instanceof Error ? res.status(500).json({ message: error.message }) : res.status(500);
//   }
// });

export default userRoutes;
