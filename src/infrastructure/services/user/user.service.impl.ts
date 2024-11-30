import { UserRoleEnum } from "../../../core/entities/enums/userRole.enum";
import { UserEntity } from "../../../core/entities/user.entity";
import { UserService } from "../../../core/services/user/user.service";

export class UserServiceImpl implements UserService {
  async createUser(login: string, password: string): Promise<UserEntity> {
    const entity: UserEntity = {
      fullName: "",
      login: "",
      hasPassword: "",
      role: UserRoleEnum.TEACHER,
      userId: "",
    };
    return entity;
  }
}
