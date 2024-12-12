import { UserEntity } from "../entities/user.entity";

export interface UserService {
  getMe(userId: string): Promise<UserEntity>;
}
