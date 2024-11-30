import { ShortUserInfo } from "./interfaces/shortUserInfo";

declare module "express-serve-static-core" {
  interface Request {
    user?: ShortUserInfo;
  }
}
