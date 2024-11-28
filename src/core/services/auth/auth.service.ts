import { UserEntity } from "../../entities/user.entity";

export interface AuthService {
  register(data: UserEntity): Promise<boolean>;
  login(login: string, password: string): Promise<string>;
}
