import { Type } from "class-transformer";
import { IsInt, IsPositive, IsString } from "class-validator";

export class CreateUserRankAccessDTO {
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  rankId!: number;

  @Type(() => String)
  @IsString()
  permission!: string;
}
