import { ACCESS_TOKEN_LIFE, REFRESH_TOKEN_LIFE, SECRET_KEY } from "../common/constants";
import { UserEntity } from "../core/entities/user.entity";
import jwt from "jsonwebtoken";
import { JWTTokens } from "../common/interfaces/jwt.interface";
import { ShortUserInfo } from "../common/interfaces/shortUserInfo";

export const generateTokens = (user: UserEntity): JWTTokens => {
  const payload: ShortUserInfo = { role: user.role, userId: user.userId };

  const tokens = {
    access: jwt.sign(payload, SECRET_KEY, { expiresIn: ACCESS_TOKEN_LIFE }),
    refresh: jwt.sign(payload, SECRET_KEY, { expiresIn: REFRESH_TOKEN_LIFE }),
  };
  return tokens;
};

export function verifyToken(token: string): Promise<any> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, payload) => {
      if (err) {
        return resolve(null);
      }
      resolve(payload);
    });
  });
}



