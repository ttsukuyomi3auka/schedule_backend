import { UserEntity } from "../../entities/user.entity";

export interface UserService {
  createUser(login: string, password: string): Promise<UserEntity>;
}
