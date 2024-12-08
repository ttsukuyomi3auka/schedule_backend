import { Container, injected, token } from "brandi";
import { UserRepository } from "../core/repositories/user/user.repository";
import { UserService } from "../core/services/user/user.service";
import { UserDataBaseConverter } from "../infrastructure/converters/userDataBase.converter";
import { UserServiceImpl } from "../infrastructure/services/user/user.service.impl";
import { UserRepositoryImpl } from "../infrastructure/repositories/user/user.repository.impl";
import { AuthService } from "../core/services/auth/auth.service";
import { AuthServiceImpl } from "../infrastructure/services/auth/auth.service.impl";
import { ScheduleService } from "../core/services/shedule/shedule.service";
import { ScheduleServiceImpl } from "../infrastructure/services/schedule/shedule.service.impl";
import { ScheduleRepository } from "../core/repositories/schedule/schedule.repository";
import { ScheduleRepositoryImpl } from "../infrastructure/repositories/schedule/schedule.repository.impl";

export const DependencyKeys = {
  userRepository: token<UserRepository>("userRepository"),
  userService: token<UserService>("userService"),
  userDataBaseConverter: token<UserDataBaseConverter>("userDataBaseConverter"),
  authService: token<AuthService>("authService"),
  scheduleService: token<ScheduleService>("scheduleService"),
  scheduleRepository: token<ScheduleRepository>("scheduleRepository"),
};
export const container = new Container();

container
  .bind(DependencyKeys.userDataBaseConverter)
  .toInstance(UserDataBaseConverter)
  .inSingletonScope();
container.bind(DependencyKeys.userRepository).toInstance(UserRepositoryImpl).inSingletonScope();
container.bind(DependencyKeys.userService).toInstance(UserServiceImpl).inSingletonScope();
container.bind(DependencyKeys.authService).toInstance(AuthServiceImpl).inSingletonScope();
container.bind(DependencyKeys.scheduleService).toInstance(ScheduleServiceImpl).inSingletonScope();
container
  .bind(DependencyKeys.scheduleRepository)
  .toInstance(ScheduleRepositoryImpl)
  .inSingletonScope();

injected(AuthServiceImpl, DependencyKeys.userRepository);
injected(UserRepositoryImpl, DependencyKeys.userDataBaseConverter);
injected(UserServiceImpl, DependencyKeys.userRepository);
injected(ScheduleServiceImpl, DependencyKeys.scheduleRepository);

//? сначала пишу все токены, потом классы которые их реализуют, после чего прописываю иньекции важно чтобы они были после билдов
