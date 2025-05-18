import * as dotenv from "dotenv";
dotenv.config({ path: ".env.dev" });
import { cleanEnv, num, str } from "envalid";

export const Enviroment = cleanEnv(process.env, {
  PORT: num({ desc: "sever port" }),
  MONGO_CONNECTION_STRING: str(),
  ACCESS_TOKEN_LIFE: num({ desc: "in Seconds" }),
  REFRESH_TOKEN_LIFE: num({ desc: "in Seconds" }),
  SECRET_KEY: str({ desc: "key for generate token" }),
});
