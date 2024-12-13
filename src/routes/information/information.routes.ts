import { Router } from "express";
import { getGroupsController } from "./controllers/getGroups.controller";
import { addGroupController } from "./controllers/addGroup.controller";
import { getGroupByNumberController } from "./controllers/getGroupByNumber.controller";
import { addDisciplineController } from "./controllers/addDiscipline.controller";
import { getDisciplinesController } from "./controllers/getDisciplines.controller";
import { addTeacherController } from "./controllers/addTeacher.controller";
import { getTeachersController } from "./controllers/getTeachers.controller";
import { searchTeachersByMessageController } from "./controllers/searchTeacherByMessage.controller";
import { searchDisciplineByMessageController } from "./controllers/searchDisciplineByMessage.controller";
import { searchGroupsByMessageController } from "./controllers/searchGroupByMessage.controller";

const informationRoutes = Router();

informationRoutes.get("/groups", getGroupsController);
informationRoutes.post("/group/add", addGroupController);
informationRoutes.get("/group/:number", getGroupByNumberController);
informationRoutes.post("/group/search", searchGroupsByMessageController);

informationRoutes.post("/discipline/add", addDisciplineController);
informationRoutes.get("/disciplines", getDisciplinesController);
informationRoutes.post("/discipline/search", searchDisciplineByMessageController);

informationRoutes.post("/teacher/add", addTeacherController);
informationRoutes.get("/teachers", getTeachersController);
informationRoutes.post("/teacher/search", searchTeachersByMessageController);

export default informationRoutes;
