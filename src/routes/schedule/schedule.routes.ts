import { Router } from "express";
import { createScheduleController } from "./controllers/createSchedule.controller";
import { getScheduleRecordsByGroupNumberController } from "./controllers/getScheduleRecordsByGroupNumber.controller";
import { getScheduleRecordsController } from "./controllers/getScheduleRecords.controller";
import { authMiddliware } from "../../common/middliware/auth.middleware";

const scheduleRoutes = Router();

scheduleRoutes.post("/create", createScheduleController);
scheduleRoutes.get("/records/:number", getScheduleRecordsByGroupNumberController);
scheduleRoutes.get("/records", [authMiddliware], getScheduleRecordsController);

export default scheduleRoutes;
