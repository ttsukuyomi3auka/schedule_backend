import { CreateScheduleEntryDTO } from "../../../core/entities/dtos/createScheduleEntry.dto";
import { ScheduleEntryEntity } from "../../../core/entities/scheduleEntry.entity";
import { ScheduleRecordEntity } from "../../../core/entities/scheduleRecord.entity";
import { ScheduleRepository } from "../../../core/repositories/schedule/schedule.repository";
import { ScheduleService } from "../../../core/services/shedule/shedule.service";





//TODO нельзя чтобы на один день было несколько записей!!!!!!!! 

export class ScheduleServiceImpl implements ScheduleService {
  constructor(private scheduleRepository: ScheduleRepository) {}
  async createScheduleEntry(entry: CreateScheduleEntryDTO): Promise<boolean> {
    // 1. Создание ScheduleEntryEntity из DTO
    const scheduleEntry: ScheduleEntryEntity = {
      id: "", // Будет сгенерировано в репозитории
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

    // 2. Сохранение ScheduleEntry в базе
    const savedEntry = await this.scheduleRepository.addScheduleEntry(scheduleEntry);
    console.log(savedEntry);

    // 3. Генерация записей ScheduleRecord
    const scheduleRecords = this.generateScheduleRecords(savedEntry);

    if (!scheduleRecords) {
      throw new Error("Не удалось создать записи");
    }

    // 4. Сохранение записей ScheduleRecord в базе
    for (const record of scheduleRecords) {
      const recordAdded = await this.scheduleRepository.addScheduleRecord(record);
      if (!recordAdded) {
        throw new Error("Не удалось сохранить запись занятия в базу данных");
      }
    }

    return true;
  }

  private generateScheduleRecords(entry: ScheduleEntryEntity): ScheduleRecordEntity[] {
    const records: ScheduleRecordEntity[] = [];
    const startDate = new Date(entry.periodStart);
    const endDate = new Date(entry.periodEnd);

    if (entry.daysAndTime instanceof Map) {
      for (const [day, times] of entry.daysAndTime.entries()) {
        const dayOfWeek = parseInt(day);

        // Перебор дней в периоде
        for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
          if (date.getDay() === dayOfWeek) {
            for (const time of times) {
              records.push({
                id: "",
                target: entry.target,
                discipline: entry.discipline,
                teachers: entry.teachers,
                lessonType: entry.lessonType,
                date: new Date(date).toISOString(), // Создаем новый объект даты, чтобы избежать мутации
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
    }

    return records;
  }
}
