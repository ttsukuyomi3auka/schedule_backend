import { UserRepository } from "../core/repositories/user/user.repository";
import { UserRepositoryImpl } from "../infrastructure/repositories/user/user.repository.impl";
import { UserService } from "../core/services/user/user.service";
import { UserServiceImpl } from "../infrastructure/services/user/user.service.impl";
import { DIContainer } from "@wessberg/di";

export const container = new DIContainer();

container.registerSingleton<UserRepository, UserRepositoryImpl>();
container.registerSingleton<UserService, UserServiceImpl>();
