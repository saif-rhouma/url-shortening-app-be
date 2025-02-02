/* eslint-disable @typescript-eslint/no-explicit-any */
import serializeDTO from '../../src/utils/serializeDto';
import { TestDTO } from '../mocks/test.dto';

describe('serializeDto', () => {
  it('should transform plain object into a class instance', () => {
    const data = {
      name: 'Saifeddine RHOUMA',
      age: 34,
      extraField: 'should not be included',
    };

    const result = serializeDTO(TestDTO, data);

    expect(result).toBeInstanceOf(TestDTO);
    expect(result.name).toBe('Saifeddine RHOUMA');
    expect(result.age).toBe(34);

    expect((result as any).extraField).toBeUndefined();
  });

  it('should exclude extra fields that are not in the DTO class', () => {
    const data = {
      name: 'Saifeddine RHOUMA',
      age: 34,
      extraField: 'extra value',
    };

    const result = serializeDTO(TestDTO, data);
    expect((result as any).extraField).toBeUndefined();
  });

  it('should return an empty instance if the data is empty', () => {
    const data = {};

    const result = serializeDTO(TestDTO, data);

    expect(result).toBeInstanceOf(TestDTO);
    expect(result.name).toBeUndefined();
    expect(result.age).toBeUndefined();
  });
});
