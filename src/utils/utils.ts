import { ACCESS_TOKEN_LIFE, REFRESH_TOKEN_LIFE, SECRET_KEY } from "../common/constants";
import { UserEntity } from "../core/entities/user.entity";
import jwt from "jsonwebtoken";
import { JWTTokens } from "../common/interfaces/jwt.interface";

export const generateTokens = (user: UserEntity): JWTTokens => {
  const payload = { role: user.role };

  const tokens = {
    access: jwt.sign(payload, SECRET_KEY, { expiresIn: ACCESS_TOKEN_LIFE }),
    refresh: jwt.sign(payload, SECRET_KEY, { expiresIn: REFRESH_TOKEN_LIFE }),
  };
  return tokens;
};
