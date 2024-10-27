import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";

export class FindOneUserRankDTO {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  id?: number;

  @IsOptional()
  @Type(() => String)
  @IsString()
  name?: string;
}
