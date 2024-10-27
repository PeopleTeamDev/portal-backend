import { Type } from "class-transformer";
import { IsInt, IsOptional, IsPositive, IsString } from "class-validator";

export class FindManyUserRankDTO {
  @IsOptional()
  @Type(() => Number)
  @IsInt({ each: true })
  ids?: number[];

  @IsOptional()
  @Type(() => String)
  @IsString({ each: true })
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
