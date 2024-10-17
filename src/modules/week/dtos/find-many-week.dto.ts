import { Type } from "class-transformer";
import { IsInt, IsOptional, IsPositive } from "class-validator";

export class FindManyWeekDTO {
  @IsOptional()
  @Type(() => Number)
  @IsInt({ each: true })
  ids?: number[];

  @IsOptional()
  @Type(() => Number)
  @IsInt({ each: true })
  numbers?: number[];

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  cursor?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  limit?: number = 10;
}
