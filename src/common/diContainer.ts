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
import { GroupRepository } from "../core/repositories/group.repository";
import { GroupRepositoryImpl } from "../infrastructure/repositories/group.respository.impl";
import { InformationService } from "../core/services/information.service";
import { InformationServiceImpl } from "../infrastructure/services/information.service.impl";
import { GroupDataBaseConverter } from "../infrastructure/converters/groupDataBase.converter";
import { DisciplineRepository } from "../core/repositories/discipline.repository";
import { DisciplineDataBaseConverter } from "../infrastructure/converters/disciplineDataBase.converter";
import { DisciplineRepositoryImpl } from "../infrastructure/repositories/discipline.repository.impl";
import { TeacherRepository } from "../core/repositories/teacher.repository";
import { TeacherDataBaseConverter } from "../infrastructure/converters/teacherDataBase.converter";
import { TeacherRepositoryImpl } from "../infrastructure/repositories/teacher.repository.impl";

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

  informationService: token<InformationService>("informationService"),

  groupRepository: token<GroupRepository>("groupRepository"),
  groupDataBaseConverter: token<GroupDataBaseConverter>("groupDataBaseConverter"),

  disciplineRepository: token<DisciplineRepository>("disciplineRepository"),
  disciplineDataBaseConverter: token<DisciplineDataBaseConverter>("disciplineDataBaseConverter"),

  teacherRepository: token<TeacherRepository>("teacherRepository"),
  teacherDataBaseConverter: token<TeacherDataBaseConverter>("teacherDataBaseConverter"),
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

container
  .bind(DependencyKeys.informationService)
  .toInstance(InformationServiceImpl)
  .inSingletonScope();

container.bind(DependencyKeys.groupRepository).toInstance(GroupRepositoryImpl).inSingletonScope();
container
  .bind(DependencyKeys.groupDataBaseConverter)
  .toInstance(GroupDataBaseConverter)
  .inSingletonScope();

container
  .bind(DependencyKeys.disciplineRepository)
  .toInstance(DisciplineRepositoryImpl)
  .inSingletonScope();
container
  .bind(DependencyKeys.disciplineDataBaseConverter)
  .toInstance(DisciplineDataBaseConverter)
  .inSingletonScope();

container
  .bind(DependencyKeys.teacherRepository)
  .toInstance(TeacherRepositoryImpl)
  .inSingletonScope();
container
  .bind(DependencyKeys.teacherDataBaseConverter)
  .toInstance(TeacherDataBaseConverter)
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

injected(GroupRepositoryImpl, DependencyKeys.groupDataBaseConverter);
injected(DisciplineRepositoryImpl, DependencyKeys.disciplineDataBaseConverter);
injected(TeacherRepositoryImpl, DependencyKeys.teacherDataBaseConverter);

injected(
  InformationServiceImpl,
  DependencyKeys.groupRepository,
  DependencyKeys.disciplineRepository,
  DependencyKeys.teacherRepository
);

//? сначала пишу все токены, потом классы которые их реализуют, после чего прописываю иньекции важно чтобы они были после билдов
