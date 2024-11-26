"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
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
exports.default = userRoutes;
