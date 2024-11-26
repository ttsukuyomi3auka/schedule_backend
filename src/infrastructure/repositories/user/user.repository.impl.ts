import { UserEntity } from "../../../core/entities/user.entity";
import { UserRepository } from "../../../core/repositories/user/user.repository";

export class UserRepositoryImpl implements UserRepository {
  add(user: UserEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
