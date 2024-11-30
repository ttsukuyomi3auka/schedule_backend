import { NextFunction, Request, Response } from "express";
import { ShortUserInfo } from "../interfaces/shortUserInfo";
import { verifyToken } from "../../utils/utils";

export const authMiddliware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      res.status(401).json({ message: "Нет токена авторизации!" });
      return;
    }

    const payload = await verifyToken(token);

    if (!payload) {
      res.status(403).json({ message: "Токен не валиден!" });
      return;
    }
    const { role, userId } = payload as ShortUserInfo;
    next();
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
      return;
    }
    console.log(error);
    res.status(500).send("Произошла ошибка на сервере.");
  }
};
