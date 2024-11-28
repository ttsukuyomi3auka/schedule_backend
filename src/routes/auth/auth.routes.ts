import { Router } from "express";

export const authRoutes = Router();

authRoutes.post("/register");
authRoutes.post("/login");
