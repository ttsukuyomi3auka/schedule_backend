import { Router } from "express";

import { signInController } from "./controllers/signIn.controller";
import { signUpController } from "./controllers/signUp.controller";

export const authRoutes = Router();

authRoutes.post("/signUp", signUpController);
authRoutes.post("/signIn", signInController);
