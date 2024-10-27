import { Entity, Property } from "@mikro-orm/core";
import { CreateRankDTO } from "./dtos/create-rank.dto";
import { Rank } from "./rank.interface";

@Entity({ tableName: "rank" })
export class RankEntity implements Rank {
  @Property({ primary: true })
  id!: number;

  @Property({ unique: true })
  name!: string;

  @Property()
  description!: string;

  constructor(createDTO: CreateRankDTO) {
    this.name = createDTO.name;
    this.description = createDTO.description;
  }
}
