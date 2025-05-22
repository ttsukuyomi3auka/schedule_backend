import { CreateScheduleEntryDTO } from "../../core/entities/dtos/createScheduleEntry.dto";
import { UserRoleEnum } from "../../core/entities/enums/userRole.enum";
import { ScheduleEntryEntity } from "../../core/entities/scheduleEntry.entity";
import { ScheduleRecordEntity } from "../../core/entities/scheduleRecord.entity";
import { ScheduleRepository } from "../../core/repositories/schedule.repository";
import { TeacherRepository } from "../../core/repositories/teacher.repository";
import { UserRepository } from "../../core/repositories/user.repository";
import { ScheduleService } from "../../core/services/schedule.service";

import {
  formatDate,
  getDayFromIndex,
  getTimeFromIndex,
} from "../../utils/format";

export class ScheduleServiceImpl implements ScheduleService {
  constructor(
    private scheduleRepository: ScheduleRepository,
    private userRepository: UserRepository,
    private teacherRepository: TeacherRepository
  ) {}

  async getScheduleRecords(userId: string): Promise<ScheduleRecordEntity[]> {
    let records = [];
    const user = await this.userRepository.findUserById(userId);
    switch (user.role) {
      case UserRoleEnum.STUDENT:
        records = await this.scheduleRepository.findRecordsByGroupNumber(
          user.groupNumber!
        );
        break;
      case UserRoleEnum.TEACHER:
        records = await this.scheduleRepository.findRecordsByTeacherFullName(
          user.fullName
        );
        break;

      default:
        throw new Error("Не удалось получить записи");
    }
    return records;
  }

  async getScheduleRecordsByGroupNumber(
    groupNumber: number
  ): Promise<ScheduleRecordEntity[]> {
    const records = await this.scheduleRepository.findRecordsByGroupNumber(
      groupNumber
    );
    if (records.length === 0)
      throw new Error("Нет расписания для данной группы");
    return records;
  }

  async getScheduleRecordsByTeacherId(
    id: string
  ): Promise<ScheduleRecordEntity[]> {
    const teacher = await this.teacherRepository.findTeacherById(id);
    const records = await this.scheduleRepository.findRecordsByTeacherFullName(
      teacher.fullName
    );
    if (records.length === 0)
      throw new Error("Нет расписания для этого преподавателя");
    return records;
  }

  async createScheduleEntry(entry: CreateScheduleEntryDTO): Promise<boolean> {
    //? Создание ScheduleEntryEntity из DTO
    const scheduleEntry: ScheduleEntryEntity = {
      id: "",
      target: entry.target,
      discipline: entry.discipline,
      teachers: entry.teacher,
      lessonType: entry.lessonType,
      daysAndTime: entry.daysAndTime,
      periodStart: entry.periodStart,
      periodEnd: entry.periodEnd,
      lessonFormat: entry.lessonFormat,
      room: entry.room,
    };

    //? Генерация записей ScheduleRecord
    const scheduleRecords = this.generateScheduleRecords(scheduleEntry);
    if (!scheduleRecords || scheduleRecords.length == 0) {
      throw new Error("Не удалось создать записи");
    }

    //? Проверка что все записи валидны
    for (const record of scheduleRecords) {
      const exist = await this.scheduleRepository.findRecordByDateAndTime(
        record.date,
        record.time
      );
      if (exist != null) {
        throw new Error(
          `Место на ${getDayFromIndex(record.day)} ${formatDate(
            record.date
          )} - ${getTimeFromIndex(record.time)} уже занято`
        );
      }
    }

    //? Сохранение ScheduleEntry в базе
    const savedEntry = await this.scheduleRepository.addScheduleEntry(
      scheduleEntry
    );

    //? Сохранение записей ScheduleRecord в базе
    for (const record of scheduleRecords) {
      record.scheduleEntryId = savedEntry.id;
      const recordAdded = await this.scheduleRepository.addScheduleRecord(
        record
      );
      if (!recordAdded) {
        throw new Error("Не удалось сохранить запись занятия в базу данных");
      }
    }

    return true;
  }

  private generateScheduleRecords(
    entry: ScheduleEntryEntity
  ): ScheduleRecordEntity[] {
    const records: ScheduleRecordEntity[] = [];
    const startDate = new Date(
      entry.periodStart.split(".").reverse().join("-")
    );
    const endDate = new Date(entry.periodEnd.split(".").reverse().join("-"));

    let daysAndTime: Map<string, number[]>;
    if (!(entry.daysAndTime instanceof Map)) {
      daysAndTime = new Map(Object.entries(entry.daysAndTime));
    } else {
      daysAndTime = entry.daysAndTime;
    }

    for (const [day, times] of daysAndTime.entries()) {
      const dayOfWeek = parseInt(day);

      for (
        let date = new Date(startDate);
        date <= endDate;
        date.setDate(date.getDate() + 1)
      ) {
        if (date.getDay() === dayOfWeek) {
          for (const time of times) {
            records.push({
              id: "",
              target: entry.target,
              discipline: entry.discipline,
              teachers: entry.teachers,
              lessonType: entry.lessonType,
              date: new Date(date).toISOString(),
              day: dayOfWeek,
              time: time,
              lessonFormat: entry.lessonFormat,
              room: entry.room,
              scheduleEntryId: entry.id,
            });
          }
        }
      }
    }

    return records;
  }

  async updateScheduleEntry(dto: Partial<ScheduleRecordEntity>): Promise<void> {
    //? обновление группы записей
    if (!dto.scheduleEntryId) throw new Error("ID группы не указан");
    const scheduleEntry = await this.scheduleRepository.findRecordEntryById(
      dto.scheduleEntryId
    );
    const updateEntryData: ScheduleEntryEntity = {
      id: dto.scheduleEntryId,
      target: dto.target ?? scheduleEntry.target,
      discipline: dto.discipline ?? scheduleEntry.discipline,
      teachers: dto.teachers ?? scheduleEntry.teachers,
      lessonType: dto.lessonType ?? scheduleEntry.lessonType,
      daysAndTime: scheduleEntry.daysAndTime,
      periodStart: scheduleEntry.periodStart,
      periodEnd: scheduleEntry.periodEnd,
      lessonFormat: dto.lessonFormat ?? scheduleEntry.lessonFormat,
      room: dto.room ?? scheduleEntry.room,
    };
    await this.scheduleRepository.updateScheduleEntry(updateEntryData);

    //? обновление всех записей в этой группе
    const scheduleRecords = await this.scheduleRepository.findRecordsByEntryId(
      dto.scheduleEntryId
    );
    if (!scheduleRecords.length) return;

    const updatedRecords = scheduleRecords.map((r) => {
      return {
        id: r.id,
        target: dto.target,
        discipline: dto.discipline,
        teachers: dto.teachers,
        lessonType: dto.lessonType,
        date: r.date,
        day: r.day,
        time: r.time,
        lessonFormat: dto.lessonFormat,
        room: dto.room,
        scheduleEntryId: dto.scheduleEntryId,
      };
    });
    const updatePromises = updatedRecords.map((record) =>
      this.scheduleRepository.updateScheduleRecord(record)
    );
    await Promise.all(updatePromises);
  }
  async updateScheduleRecord(
    dto: Partial<ScheduleRecordEntity>
  ): Promise<void> {
    await this.scheduleRepository.updateScheduleRecord(dto);
  }

  async deleteScheduleRecord(id: string): Promise<void> {
    await this.scheduleRepository.deleteScheduleRecord(id);
  }
  async deleteScheduleEntry(id: string): Promise<void> {
    await this.scheduleRepository.deleteScheduleRecordByEntryId(id);
    await this.scheduleRepository.deleteScheduleEntry(id);
  }
}
