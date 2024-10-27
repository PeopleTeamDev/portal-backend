import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class FindOneRankDTO {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  id?: number;

  @IsOptional()
  @Type(() => String)
  name?: string;
}
