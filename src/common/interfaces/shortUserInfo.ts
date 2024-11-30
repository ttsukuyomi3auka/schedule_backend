import { UserRoleEnum } from "../../core/entities/enums/userRole.enum";

export interface ShortUserInfo {
  role: UserRoleEnum;
  userId: string;
}
