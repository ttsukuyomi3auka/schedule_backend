import { UserEntity } from "../../core/entities/user.entity";
import { UserRepository } from "../../core/repositories/user.repository";
import { UserDataBaseConverter } from "../converters/userDataBase.converter";
import { UserDataBaseModel } from "../models/user.model";

export class UserRepositoryImpl implements UserRepository {
  constructor(private userDataBaseConverter: UserDataBaseConverter) {}

  async findUserById(userId: string): Promise<UserEntity> {
    const userModel = await UserDataBaseModel.findOne({ _id: userId }).exec();
    if (!userModel) throw new Error("Не удалось найти пользователя");

    return this.userDataBaseConverter.toEntity(userModel);
  }

  async findUserByLogin(login: string): Promise<UserEntity | null> {
    const userModel = await UserDataBaseModel.findOne({ login }).exec();
    if (!userModel) return null;
    return this.userDataBaseConverter.toEntity(userModel);
  }

  async add(user: UserEntity): Promise<void> {
    const newUser = new UserDataBaseModel(user);
    await newUser.save();
  }
}
