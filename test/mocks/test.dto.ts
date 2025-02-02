import { Expose } from 'class-transformer';

export class TestDTO {
  @Expose()
  name: string;

  @Expose()
  age: number;
}
