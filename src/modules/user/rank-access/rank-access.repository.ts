import { EntityManager, FilterQuery, FindOptions } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { UserRankEntity } from "../rank/rank.entity";
import { CreateUserRankAccessDTO } from "./dtos/create-rank-access.dto";
import { FindManyUserRankAccessDTO } from "./dtos/find-many-rank-access.dto";
import { FindOneUserRankAccessDTO } from "./dtos/find-one-rank-access.dto";
import { UpdateUserRankAccessDTO } from "./dtos/update-rank-access.dto";
import { UserRankAccessEntity } from "./rank-access.entity";

@Injectable()
export class UserRankAccessRepository {
  constructor(private readonly em: EntityManager) {}

  async findOne(findOneDTO: FindOneUserRankAccessDTO) {
    const fork = this.em.fork();
    const { id, rankId } = findOneDTO;

    const query: FilterQuery<UserRankAccessEntity> = {};
    query.$and = [];
    if (id) query.$and.push({ id });
    if (rankId) query.$and.push({ rank: { id: rankId } });

    const rankAccess = await fork.findOne(UserRankAccessEntity, query);
    return rankAccess;
  }

  async findMany(findManyDTO: FindManyUserRankAccessDTO) {
    const fork = this.em.fork();
    const { ids, rankIds, permissions, cursor, limit } = findManyDTO;

    const query: FilterQuery<UserRankAccessEntity> = {};
    query.$and = [];
    if (ids) query.$and.push({ id: { $in: ids } });
    if (rankIds) query.$and.push({ rank: { id: { $in: rankIds } } });
    if (permissions) query.$and.push({ permission: { $in: permissions } });
    if (cursor) query.$and.push({ id: { $gt: cursor } });

    const options: FindOptions<UserRankAccessEntity> = {};
    if (limit) options.limit = limit;

    const rankAccesses = await fork.find(UserRankAccessEntity, query, options);
    return rankAccesses;
  }

  async create(createDTO: CreateUserRankAccessDTO) {
    const fork = this.em.fork();

    const rankAccess = new UserRankAccessEntity(createDTO);
    await fork.persistAndFlush(rankAccess);

    return rankAccess;
  }

  async update(rankAccess: UserRankAccessEntity, updateDTO: UpdateUserRankAccessDTO) {
    const fork = this.em.fork();

    fork.assign(rankAccess, updateDTO);
    await fork.persistAndFlush(rankAccess);

    return rankAccess;
  }

  async delete(rankAccess: UserRankAccessEntity) {
    const fork = this.em.fork();

    fork.removeAndFlush(rankAccess);
  }
}
