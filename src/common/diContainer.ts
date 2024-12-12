import { Container, injected, token } from "brandi";
import { UserDataBaseConverter } from "../infrastructure/converters/userDataBase.converter";
import { UserServiceImpl } from "../infrastructure/services/user.service.impl";
import { UserRepositoryImpl } from "../infrastructure/repositories/user.repository.impl";
import { AuthServiceImpl } from "../infrastructure/services/auth.service.impl";
import { ScheduleServiceImpl } from "../infrastructure/services/shedule.service.impl";
import { ScheduleRepository } from "../core/repositories/schedule.repository";
import { ScheduleRepositoryImpl } from "../infrastructure/repositories/schedule.repository.impl";
import { ScheduleEntryDataBaseConverter } from "../infrastructure/converters/scheduleEntryDataBase.converter";
import { ScheduleRecordDataBaseConverter } from "../infrastructure/converters/scheduleRecordDataBase.converter";
import { UserRepository } from "../core/repositories/user.repository";
import { AuthService } from "../core/services/auth.service";
import { ScheduleService } from "../core/services/shedule.service";
import { UserService } from "../core/services/user.service";

export const DependencyKeys = {
  userRepository: token<UserRepository>("userRepository"),
  userService: token<UserService>("userService"),
  userDataBaseConverter: token<UserDataBaseConverter>("userDataBaseConverter"),
  authService: token<AuthService>("authService"),
  scheduleService: token<ScheduleService>("scheduleService"),
  scheduleRepository: token<ScheduleRepository>("scheduleRepository"),
  scheduleEntryDataBaseConverter: token<ScheduleEntryDataBaseConverter>(
    "scheduleEntryDataBaseConverter"
  ),
  scheduleRecordDataBaseConverter: token<ScheduleRecordDataBaseConverter>(
    "scheduleRecordDataBaseConverter"
  ),
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

container
  .bind(DependencyKeys.scheduleEntryDataBaseConverter)
  .toInstance(ScheduleEntryDataBaseConverter)
  .inSingletonScope();
container
  .bind(DependencyKeys.scheduleRecordDataBaseConverter)
  .toInstance(ScheduleRecordDataBaseConverter)
  .inSingletonScope();

injected(AuthServiceImpl, DependencyKeys.userRepository);
injected(UserRepositoryImpl, DependencyKeys.userDataBaseConverter);
injected(UserServiceImpl, DependencyKeys.userRepository);
injected(
  ScheduleRepositoryImpl,
  DependencyKeys.scheduleRecordDataBaseConverter,
  DependencyKeys.scheduleEntryDataBaseConverter
);
injected(ScheduleServiceImpl, DependencyKeys.scheduleRepository);

//? сначала пишу все токены, потом классы которые их реализуют, после чего прописываю иньекции важно чтобы они были после билдов
