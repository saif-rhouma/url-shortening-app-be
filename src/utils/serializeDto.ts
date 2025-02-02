import { plainToInstance } from 'class-transformer';
/**
 * A generic function to transform plain objects into class instances using class-transformer.
 *
 * @param dtoClass The DTO class to transform the data into.
 * @param data The data to be transformed into an instance of dtoClass.
 * @returns The transformed instance of dtoClass.
 */
function serializeDTO<T>(dtoClass: { new (): T }, data: object): T {
  return plainToInstance(dtoClass, data, {
    excludeExtraneousValues: true,
  });
}

export default serializeDTO;
