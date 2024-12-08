import { TargetTypeEnum } from "./enums/targetType.enum";

export interface TargetEntity {
  type: TargetTypeEnum;
  values?: string[]; // Значение (например, номер группы или название факультета)
}
