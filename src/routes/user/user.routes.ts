import { Router } from "express";
import { getMeController } from "./controllers/getMe.controller";
import { authMiddliware } from "../../common/middliware/auth.middleware";
import { updateUserController } from "./controllers/updateUser.controller";

const userRoutes = Router();

userRoutes.get("/me", [authMiddliware], getMeController);
userRoutes.post("/update", [authMiddliware], updateUserController);

export default userRoutes;

//?roleMiddleware([UserRoleEnum.ADMIN, UserRoleEnum.STUDENT])
