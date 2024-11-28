import { AuthService } from "../../../core/services/auth/auth.service";

export class AuthServiceImpl implements AuthService {
  register(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  login(login: string, password: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
}
