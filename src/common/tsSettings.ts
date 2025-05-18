import { ShortUserInfo } from "./interfaces/shortUserInfo";

declare global {
  namespace Express {
    interface Request {
      user?: ShortUserInfo;
    }
  }
}
