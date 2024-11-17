import { TargetTypeEnum } from "./enums/targetType.enum";

export class TargetEntity {
  type: TargetTypeEnum;
  values?: string[]; // Значение (например, номер группы или название факультета)

  constructor({ type, values }: { type: TargetTypeEnum; values?: string[] }) {
    this.type = type;
    this.values = values;
  }
}
