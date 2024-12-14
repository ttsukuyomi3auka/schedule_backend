import { Router } from "express";
import { getMeController } from "./controllers/getMe.controller";
import { authMiddliware } from "../../common/middliware/auth.middleware";
import { roleMiddleware } from "../../common/middliware/role.middleware";
import { UserRoleEnum } from "../../core/entities/enums/userRole.enum";

const userRoutes = Router();

userRoutes.get("/me", [authMiddliware], getMeController);

export default userRoutes;

//?roleMiddleware([UserRoleEnum.ADMIN, UserRoleEnum.STUDENT])
