import { Type } from "class-transformer";
import { IsDate, IsInt, IsOptional } from "class-validator";

export class FindOneWeekDTO {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  id?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  number?: number;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  date?: Date;
}
