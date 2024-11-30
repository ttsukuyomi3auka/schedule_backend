import { UserRoleEnum } from "./enums/userRole.enum";

export interface UserEntity {
  userId: string;
  fullName: string;
  login: string;
  hasPassword: string;
  role: UserRoleEnum;
  groupNumber?: number;
}
