import { Transform, Type } from "class-transformer";
import { IsArray, IsInt, IsOptional, IsPositive, IsString, Validate } from "class-validator";

export class FindManyUserRankAccessDTO {
  @IsOptional()
  @Type(() => Number)
  @IsInt({ each: true })
  @IsPositive({ each: true })
  ids?: number[];

  @IsOptional()
  @Type(() => Number)
  @IsInt({ each: true })
  @IsPositive({ each: true })
  rankIds?: number[];

  @IsOptional()
  @Type(() => String)
  @IsString({ each: true })
  permissions?: string[];

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
