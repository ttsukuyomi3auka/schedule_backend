import { UserEntity } from "../../../core/entities/user.entity";
import { UserRepository } from "../../../core/repositories/user/user.repository";
import { UserDataBaseConverter } from "../../converters/userDataBase.converter";
import { UserDataBaseModel } from "../../models/user.model";

export class UserRepositoryImpl implements UserRepository {
  constructor(private userDataBaseConverter: UserDataBaseConverter) {}

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
