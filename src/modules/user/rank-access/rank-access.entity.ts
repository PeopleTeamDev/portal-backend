import { Entity, ManyToOne, OneToMany, PrimaryKey, Property, Reference } from "@mikro-orm/core";
import { UserRankEntity } from "../rank/rank.entity";
import { CreateUserRankAccessDTO } from "./dtos/create-rank-access.dto";
import { UserRankAccess } from "./rank-access.interface";

@Entity({ schema: "user", tableName: "rank_access" })
export class UserRankAccessEntity implements UserRankAccess {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => UserRankEntity, { serializedName: "rankId", serializer: (rank) => rank.id })
  rank!: UserRankEntity;

  @Property()
  permission!: string;

  constructor(createDTO: CreateUserRankAccessDTO) {
    this.rank = Reference.createNakedFromPK(UserRankEntity, createDTO.rankId);
    this.permission = createDTO.permission;
  }
}
