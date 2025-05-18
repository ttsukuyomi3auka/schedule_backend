import { ShortUserInfo } from "../../common/interfaces/shortUserInfo";
import { UpdateUserDTO } from "../entities/dtos/updateUser.dto";
import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
  add(user: UserEntity): Promise<void>;
  findUserByLogin(login: string): Promise<UserEntity | null>;
  findUserById(userId: string): Promise<UserEntity>;
  updateUser(findData: ShortUserInfo, updateData: UpdateUserDTO): Promise<void>;
}
