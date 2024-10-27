import { Entity, Property } from "@mikro-orm/core";
import { CreateUserRankDTO } from "./dtos/create-rank.dto";
import { UserRank } from "./rank.interface";

@Entity({ schema: "user", tableName: "rank" })
export class UserRankEntity implements UserRank {
  @Property({ primary: true })
  id!: number;

  @Property({ unique: true })
  name!: string;

  @Property()
  description!: string;

  constructor(createDTO: CreateUserRankDTO) {
    this.name = createDTO.name;
    this.description = createDTO.description;
  }
}
