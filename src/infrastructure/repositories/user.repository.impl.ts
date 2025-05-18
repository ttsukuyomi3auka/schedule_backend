import { ShortUserInfo } from "../../common/interfaces/shortUserInfo";
import { UpdateUserDTO } from "../../core/entities/dtos/updateUser.dto";
import { UserRoleEnum } from "../../core/entities/enums/userRole.enum";
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

  async updateUser(
    findData: ShortUserInfo,
    updateData: UpdateUserDTO
  ): Promise<void> {
    const user = await UserDataBaseModel.findOne({ _id: findData.userId });

    if (!user) {
      throw new Error("Пользователь не найден");
    }

    const allowedUpdates: Partial<UpdateUserDTO> = {};

    if (updateData.fullName) {
      allowedUpdates.fullName = updateData.fullName;
    }

    if (
      user.role === UserRoleEnum.STUDENT &&
      updateData.groupNumber !== undefined
    ) {
      allowedUpdates.groupNumber = updateData.groupNumber;
    } else if (updateData.groupNumber !== undefined) {
      throw new Error("Нельзя обновлять groupNumber для этой роли");
    }
    console.log(allowedUpdates);
    if (Object.keys(allowedUpdates).length === 0) return;

    const updatedUser = await UserDataBaseModel.findOneAndUpdate(
      { _id: findData.userId },
      { $set: allowedUpdates },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error("Не удалось обновить данные");
    }
  }
}
