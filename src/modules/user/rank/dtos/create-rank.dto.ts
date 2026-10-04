import { Type } from "class-transformer";
import { IsString } from "class-validator";

export class CreateUserRankDTO {
  @Type(() => String)
  @IsString()
  name!: string;

  @Type(() => String)
  @IsString()
  description!: string;
}
