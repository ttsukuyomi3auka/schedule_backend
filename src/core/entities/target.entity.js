export class TargetEntity {
  constructor({ type, values }) {
    this.type = type; // Тип: "group", "faculty", или "university"
    this.values = values; // Значение (например, номер группы или название факультета)
  }
}
