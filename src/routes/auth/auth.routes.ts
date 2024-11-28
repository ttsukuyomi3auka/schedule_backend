import { Router } from "express";
import { registerController } from "./controllers/register.controller";

export const authRoutes = Router();

authRoutes.post("/register", registerController);
authRoutes.post("/login");
