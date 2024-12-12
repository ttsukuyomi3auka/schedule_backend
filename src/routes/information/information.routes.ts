import { Router } from "express";
import { getGroupsController } from "./controllers/getGroups.controller";

const informationRoutes = Router();

informationRoutes.get("/groups", getGroupsController);

export default informationRoutes;
