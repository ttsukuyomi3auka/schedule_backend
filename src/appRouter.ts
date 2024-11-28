import { Router } from "express";
import userRoutes from "./routes/user/user.routes";
import { authRoutes } from "./routes/auth/auth.routes";

const appRouter = Router();

appRouter.use("/auth", authRoutes);
appRouter.use("/user", userRoutes);

export default appRouter;
