import { Type } from "class-transformer";
import { IsInt, IsOptional, IsPositive, IsString } from "class-validator";

export class FindOneUserRankAccessDTO {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  id?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  rankId?: number;

  @IsOptional()
  @Type(() => String)
  @IsString()
  permission?: string;
}
