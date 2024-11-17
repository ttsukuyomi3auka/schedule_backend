import { UserRoleEnum } from "./enums/userRole.enum";
import { GroupEntity } from "./group.entity";

export interface UserEntity {
  fullName: string;
  login: string;
  hasPassword: string;
  role: UserRoleEnum;
  group?: GroupEntity;
}
