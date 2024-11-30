import { Router } from "express";
import { signInController } from "./controllers/signIn.controller";
import { signUpController } from "./controllers/signUp.controller";
import { refreshController } from "./controllers/refresh.controller";

export const authRoutes = Router();

authRoutes.post("/signUp", signUpController);
authRoutes.post("/signIn", signInController);
authRoutes.post("/refresh", refreshController);
