import { compareSync, hashSync } from "bcrypt-ts";
import { UserEntity } from "../../core/entities/user.entity";
import { generateTokens, verifyToken } from "../../utils/utils";
import { UserRoleEnum } from "../../core/entities/enums/userRole.enum";
import { JWTTokens } from "../../common/interfaces/jwt.interface";
import { ShortUserInfo } from "../../common/interfaces/shortUserInfo";
import { UserRepository } from "../../core/repositories/user.repository";
import { AuthService } from "../../core/services/auth.service";
import { SignUpDto } from "../../core/entities/dtos/signUp.dto";

export class AuthServiceImpl implements AuthService {
  constructor(private userRepository: UserRepository) {}

  async signUp(data: SignUpDto): Promise<boolean> {
    const existingUser = await this.userRepository.findUserByLogin(data.login);
    if (existingUser) {
      throw new Error("Пользователь с таким логином уже существует");
    }

    const hashedPassword = hashSync(data.password, 10);

    const newUser: UserEntity = {
      userId: "",
      fullName: data.fullName ?? "",
      login: data.login.toLowerCase(),
      hasPassword: hashedPassword,
      role: data.role ?? UserRoleEnum.STUDENT,
      groupNumber: data.groupNumber ? data.groupNumber : undefined,
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

  async refresh(refreshToken: string): Promise<string> {
    const payload = await verifyToken(refreshToken);
    if (!payload) {
      throw new Error("Токен не валиден!");
    }

    const { userId } = payload as ShortUserInfo;

    const user = await this.userRepository.findUserById(userId);
    const newTokens = generateTokens(user);
    return newTokens.access;
  }
}
