import { ShortUserInfo } from "../../common/interfaces/shortUserInfo";
import { UpdateUserDTO } from "../../core/entities/dtos/updateUser.dto";
import { UserEntity } from "../../core/entities/user.entity";
import { UserRepository } from "../../core/repositories/user.repository";
import { UserService } from "../../core/services/user.service";

export class UserServiceImpl implements UserService {
  constructor(private userRepository: UserRepository) {}

  async getMe(userId: string): Promise<UserEntity> {
    const user = await this.userRepository.findUserById(userId);
    return user;
  }

  async updateUser(
    findData: ShortUserInfo,
    updateData: UpdateUserDTO
  ): Promise<void> {
    return await this.userRepository.updateUser(findData, updateData);
  }
}
