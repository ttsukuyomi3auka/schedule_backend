import { JWTTokens } from "../../../common/interfaces/jwt.interface";

export interface AuthService {
  signUp(login: string, password: string): Promise<boolean>;
  signIn(login: string, password: string): Promise<JWTTokens>;
}
