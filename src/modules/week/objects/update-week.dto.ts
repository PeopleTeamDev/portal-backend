import { Type } from "class-transformer";
import { IsDate, IsInt, IsOptional, IsPositive } from "class-validator";

export class UpdateWeekDTO {
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @IsPositive()
  id?: number;

  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @IsPositive()
  number?: number;

  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @IsPositive()
  new_number?: number;

  @Type(() => Date)
  @IsOptional()
  @IsDate()
  new_beginAt?: Date;

  @Type(() => Date)
  @IsOptional()
  @IsDate()
  new_endAt?: Date
}