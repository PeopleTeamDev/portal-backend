import { Type } from "class-transformer";
import { IsInt, IsOptional, IsPositive } from "class-validator";

export class FindManyRankDTO {
  @IsOptional()
  @Type(() => Number)
  @IsInt({ each: true })
  ids?: number[];

  @IsOptional()
  @Type(() => String)
  names?: string[];

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
