import { NextFunction, Request, Response } from "express";

export const roleMiddleware = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user || !user.role) {
      res.status(403).json({ message: "Доступ запрещен. Роль пользователя не определена." });
      return;
    }

    if (!allowedRoles.includes(user.role)) {
      res.status(403).json({ message: "Доступ запрещен. У вас нет необходимых прав." });
      return;
    }

    next();
  };
};
