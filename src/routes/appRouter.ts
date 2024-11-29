import { Router } from "express";
import { authRoutes } from "./auth/auth.routes";
import userRoutes from "./user/user.routes";

const appRouter = Router();

appRouter.use("/auth", authRoutes);
appRouter.use("/user", userRoutes);

export default appRouter;
