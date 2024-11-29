import { compareSync, hashSync } from "bcrypt-ts";
import { UserEntity } from "../../../core/entities/user.entity";
import { UserRepository } from "../../../core/repositories/user/user.repository";
import { AuthService } from "../../../core/services/auth/auth.service";
import { generateTokens } from "../../../utils/utils";
import { UserRoleEnum } from "../../../core/entities/enums/userRole.enum";
import { JWTTokens } from "../../../common/interfaces/jwt.interface";

export class AuthServiceImpl implements AuthService {
  constructor(private userRepository: UserRepository) {}

  async signUp(login: string, password: string): Promise<boolean> {
    const existingUser = await this.userRepository.findUserByLogin(login);
    if (existingUser) {
      throw new Error("Пользователь с таким логином уже существует.");
    }

    const hashedPassword = hashSync(password, 10);

    const newUser: UserEntity = {
      fullName: "",
      login: login.toLowerCase(),
      hasPassword: hashedPassword,
      role: UserRoleEnum.STUDENT,
    };

    await this.userRepository.add(newUser);
    return true;
  }

  async signIn(login: string, password: string): Promise<JWTTokens> {
    const findedUser = await this.userRepository.findUserByLogin(login);
    if (!findedUser) {
      throw new Error("Пользователь ещё не зарегистрирован");
    }

    const isPasswordValid = compareSync(password, findedUser.hasPassword);
    if (!isPasswordValid) {
      throw new Error("Неверный пароль");
    }
    const token = generateTokens(findedUser);

    return token;
  }
}
