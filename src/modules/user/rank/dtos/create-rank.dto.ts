import { Type } from "class-transformer";

export class CreateRankDTO {
  @Type(() => String)
  name!: string;

  @Type(() => String)
  description!: string;
}
