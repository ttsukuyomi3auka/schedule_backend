import { UserEntity } from "../../core/entities/user.entity";
import { UserRepository } from "../../core/repositories/user.repository";
import { UserService } from "../../core/services/user.service";

export class UserServiceImpl implements UserService {
  constructor(private userRepository: UserRepository) {}

  async getMe(userId: string): Promise<UserEntity> {
    const user = await this.userRepository.findUserById(userId);
    if (!user) {
      throw new Error("Пользователь не найден");
    }
    return user;
  }
}
