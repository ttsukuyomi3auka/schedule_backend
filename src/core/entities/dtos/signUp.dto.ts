import { UserRoleEnum } from "../enums/userRole.enum";

export interface SignUpDto {
  login: string;
  password: string;
  fullName: string;
  role: UserRoleEnum;
  groupNumber?: number;
}
