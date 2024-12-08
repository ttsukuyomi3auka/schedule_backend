import { Router } from "express";
import { authRoutes } from "./auth/auth.routes";
import userRoutes from "./user/user.routes";
import scheduleRoutes from "./schedule/schedule.routes";

const appRouter = Router();

appRouter.use("/auth", authRoutes);
appRouter.use("/user", userRoutes);
appRouter.use("/schedule", scheduleRoutes);

export default appRouter;
