import { Router } from "express";
import { getGroupsController } from "./controllers/getGroups.controller";
import { addGroupController } from "./controllers/addGroup.controller";

const informationRoutes = Router();

informationRoutes.get("/groups", getGroupsController);
informationRoutes.post("/group/add", addGroupController);

export default informationRoutes;
