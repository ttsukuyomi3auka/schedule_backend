import { Router } from "express";
import { createScheduleController } from "./controllers/createSchedule.controller";
import { getScheduleRecordsByGroupNumberController } from "./controllers/getScheduleRecordsByGroupNumber.controller";
import { getScheduleRecordsController } from "./controllers/getScheduleRecords.controller";
import { authMiddliware } from "../../common/middliware/auth.middleware";
import { getScheduleRecordsByTeacherIdController } from "./controllers/getSchedulerRecordsByTeacherId.controller";
import { updateScheduleEntryController } from "./controllers/updateScheduleEntry.controller";
import { updateScheduleRecordController } from "./controllers/updateScheduleRecord.controller";
import { getScheduleEntryController } from "./controllers/getScheduleEntry.controller";

const scheduleRoutes = Router();

scheduleRoutes.post("/create", createScheduleController);
scheduleRoutes.get(
  "/records/group/:number",
  getScheduleRecordsByGroupNumberController
);
scheduleRoutes.get(
  "/records/teacher/:id",
  getScheduleRecordsByTeacherIdController
);
scheduleRoutes.get("/records", [authMiddliware], getScheduleRecordsController);
scheduleRoutes.post("/updateEntry", updateScheduleEntryController);
scheduleRoutes.post("/updateRecord", updateScheduleRecordController);
scheduleRoutes.post("/get", getScheduleEntryController);

export default scheduleRoutes;
