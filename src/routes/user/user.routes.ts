import { Router } from "express";
import { createUserController } from "./controllers/createUser.controller";

const userRoutes = Router();

userRoutes.post("/create", createUserController);

export default userRoutes;
