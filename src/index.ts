import express, { json } from "express";
import mongoose from "mongoose";
import appRouter from "./appRouter";
import { Enviroment } from "../enviroment";

const app = express();
app.use(json());
app.use("/api", appRouter);

app.listen(Enviroment.PORT, async () => {
  const mongooseConnect = await mongoose.connect(Enviroment.MONGO_CONNECTION_STRING);
  if (mongooseConnect.connection.readyState == mongooseConnect.STATES.connected) {
    console.log(`👍 Mongoose successfull connection!`);
  } else {
    console.log(`🤬 Mongoose connection is failed!`);
  }
  console.log(`Server is running on http://localhost:${Enviroment.PORT}`);
});
