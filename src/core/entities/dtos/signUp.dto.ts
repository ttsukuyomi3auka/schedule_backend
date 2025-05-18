import { UserRoleEnum } from "../enums/userRole.enum";

export interface SignUpDTO {
  login: string;
  password: string;
  fullName: string;
  role: UserRoleEnum;
  groupNumber?: number;
}
