import { hashSync } from "bcrypt-ts";
import { UserEntity } from "../../../core/entities/user.entity";
import { UserRepository } from "../../../core/repositories/user/user.repository";
import { AuthService } from "../../../core/services/auth/auth.service";


export class AuthServiceImpl implements AuthService {
  constructor(private userRepository: UserRepository) {}

  async register(data: UserEntity): Promise<boolean> {
    const existingUser = await this.userRepository.findUserByLogin(data.login);
    if (existingUser) {
      throw new Error("Пользователь с таким логином уже существует.");
    }

    const hashedPassword = hashSync(data.hasPassword, 10);
    data.hasPassword = hashedPassword;

    await this.userRepository.add(data);
    return true;
  }

  async login(login: string, password: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
}


