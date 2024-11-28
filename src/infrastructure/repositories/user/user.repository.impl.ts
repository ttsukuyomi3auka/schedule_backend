import { UserEntity } from "../../../core/entities/user.entity";
import { UserRepository } from "../../../core/repositories/user/user.repository";

export class UserRepositoryImpl implements UserRepository {
  findUserByLogin(login: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  add(user: UserEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
