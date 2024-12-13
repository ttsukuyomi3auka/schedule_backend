import { Router } from "express";
import { getGroupsController } from "./controllers/getGroups.controller";
import { addGroupController } from "./controllers/addGroup.controller";
import { getGroupByNumberController } from "./controllers/getGroupByNumber.controller";

const informationRoutes = Router();

informationRoutes.get("/groups", getGroupsController);
informationRoutes.post("/group/add", addGroupController);
informationRoutes.get("/group/:number", getGroupByNumberController);

export default informationRoutes;
