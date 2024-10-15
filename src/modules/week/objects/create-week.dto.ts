import { Type } from "class-transformer";
import { IsDate, IsInt, IsNumber, IsPositive } from "class-validator";

export class CreateWeekDTO {
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  number!: number;

  @Type(() => Date)
  @IsDate()
  beginAt!: Date;

  @Type(() => Date)
  @IsDate()
  endAt!: Date;
}
