import * as dotenv from "dotenv";
dotenv.config({ path: ".env.dev" });
import { cleanEnv, num, str } from "envalid";

export const Enviroment = cleanEnv(process.env, {
  PORT: num({ desc: "sever port" }),
  MONGO_ROOT_USERNAME: str({ desc: "mongo user" }),
  MONGO_ROOT_PASSWORD: str({ desc: "mongo password" }),
  MONGO_PORT: str({ desc: "mongo docker port" }),
  MONGO_CONNECTION_STRING: str(),
  NODE_ENV: str({ choices: ["dev", "test", "production"] }),
});
