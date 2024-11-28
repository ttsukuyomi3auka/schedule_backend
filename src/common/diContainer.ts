import { Container, injected, token } from "brandi";
import { UserRepository } from "../core/repositories/user/user.repository";
import { UserService } from "../core/services/user/user.service";
import { UserDataBaseConverter } from "../infrastructure/converters/userDataBase.converter";
import { UserServiceImpl } from "../infrastructure/services/user/user.service.impl";
import { UserRepositoryImpl } from "../infrastructure/repositories/user/user.repository.impl";
import { AuthService } from "../core/services/auth/auth.service";
import { AuthServiceImpl } from "../infrastructure/services/auth/auth.service.impl";

export const DependencyKeys = {
  userRepository: token<UserRepository>("userRepository"),
  userService: token<UserService>("userService"),
  userDataBaseConverter: token<UserDataBaseConverter>("userDataBaseConverter"),
  authService: token<AuthService>("authService"),
};
export const container = new Container();

container
  .bind(DependencyKeys.userDataBaseConverter)
  .toInstance(UserDataBaseConverter)
  .inSingletonScope();
container.bind(DependencyKeys.userRepository).toInstance(UserRepositoryImpl).inSingletonScope();
container.bind(DependencyKeys.userService).toInstance(UserServiceImpl).inSingletonScope();
container.bind(DependencyKeys.authService).toInstance(AuthServiceImpl).inSingletonScope();

injected(AuthServiceImpl, DependencyKeys.userRepository);
injected(UserRepositoryImpl, DependencyKeys.userDataBaseConverter);

//? сначала пишу все токены, потом классы которые их реализуют, после чего прописываю иньекции важно чтобы они были после билдов
