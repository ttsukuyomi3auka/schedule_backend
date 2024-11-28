export interface Converter<Model, Entity> {
  toModel(entity: Entity): Model;
  toEntity(model: Model): Entity;
}
