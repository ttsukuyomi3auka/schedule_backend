import { Router } from "express";
import { createScheduleController } from "./controllers/createSchedule.controller";

const scheduleRoutes = Router();

scheduleRoutes.post("/create", createScheduleController);

export default scheduleRoutes;
