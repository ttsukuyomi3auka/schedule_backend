import express from "express";
import { Enviroment } from "../enviroment";
import mongoose from "mongoose";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(Enviroment.PORT, async () => {
  const mongooseConnect = await mongoose.connect(Enviroment.MONGO_CONNECTION_STRING);
  if (mongooseConnect.connection.readyState == mongooseConnect.STATES.connected) {
    console.log(`👍 Mongoose successfull connection!`);
  } else {
    console.log(`🤬 Mongoose connection is failed!`);
  }
  console.log(`Server is running on http://localhost:${Enviroment.PORT}`);
});
