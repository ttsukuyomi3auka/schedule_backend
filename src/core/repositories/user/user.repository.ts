import { UserEntity } from "../../entities/user.entity";

export interface UserRepository {
  add(user: UserEntity): Promise<void>;
  findUserByLogin(login: string): Promise<UserEntity | null>;
}
