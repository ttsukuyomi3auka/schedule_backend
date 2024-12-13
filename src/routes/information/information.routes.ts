import { Router } from "express";
import { getGroupsController } from "./controllers/getGroups.controller";
import { addGroupController } from "./controllers/addGroup.controller";
import { getGroupByNumberController } from "./controllers/getGroupByNumber.controller";
import { addDisciplineController } from "./controllers/addDiscipline.controller";
import { getDisciplinesController } from "./controllers/getDisciplines.controller";

const informationRoutes = Router();

informationRoutes.get("/groups", getGroupsController);
informationRoutes.post("/group/add", addGroupController);
informationRoutes.get("/group/:number", getGroupByNumberController);

informationRoutes.post("/discipline/add", addDisciplineController);
informationRoutes.get("/disciplines", getDisciplinesController);

export default informationRoutes;
