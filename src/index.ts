import express from "express";
import { Enviroment } from "../enviroment";
import mongoose from "mongoose";
const app = express();

Enviroment.PORT;

const mongoString = `mongodb://${Enviroment.MONGO_ROOT_USERNAME}:${Enviroment.MONGO_ROOT_PASSWORD}@${Enviroment.MONGO_PORT}/schedule?authSource=admin`;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(Enviroment.PORT, async () => {
  const mongooseConnect = await mongoose.connect(mongoString);
  if (mongooseConnect.connection.readyState == mongooseConnect.STATES.connected) {
    console.log(`👍 Mongoose successfull connection!`);
  } else {
    console.log(`🤬 Mongoose connection is failed!`);
  }
  console.log(`Server is running on http://localhost:${Enviroment.PORT}`);
});
