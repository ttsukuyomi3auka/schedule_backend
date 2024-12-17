import { JWTTokens } from "../../common/interfaces/jwt.interface";
import { SignUpDto } from "../entities/dtos/signUp.dto";

export interface AuthService {
  signUp(data: SignUpDto): Promise<boolean>;
  signIn(login: string, password: string): Promise<JWTTokens>;
  refresh(refreshToken: string): Promise<string>;
}
