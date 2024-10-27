import { EntityManager, FilterQuery } from "@mikro-orm/core";
import { FindOptions } from "@mikro-orm/core";
import { Injectable } from "@nestjs/common";
import { CreateUserRankDTO } from "./dtos/create-rank.dto";
import { FindManyUserRankDTO } from "./dtos/find-many-rank.dto";
import { FindOneUserRankDTO } from "./dtos/find-one-rank.dto";
import { UpdateUserRankDTO } from "./dtos/update-rank.dto";
import { UserRankEntity } from "./rank.entity";

@Injectable()
export class UserRankRepository {
  constructor(private readonly em: EntityManager) {}
  async findOne(findOneDTO: FindOneUserRankDTO) {
    const fork = this.em.fork();
    const { id, name } = findOneDTO;

    const query: FilterQuery<UserRankEntity> = {};
    query.$and = [];
    if (id) query.$and.push({ id });
    if (name) query.$and.push({ name });

    const rank = await fork.findOne(UserRankEntity, query);
    return rank;
  }

  async findMany(findManyDTO: FindManyUserRankDTO) {
    const fork = this.em.fork();
    const { ids, names, cursor, limit } = findManyDTO;

    const query: FilterQuery<UserRankEntity> = {};
    query.$and = [];
    if (ids) query.$and.push({ id: { $in: ids } });
    if (names) query.$and.push({ name: { $in: names } });
    if (cursor) query.$and.push({ id: { $gt: cursor } });

    const options: FindOptions<UserRankEntity> = {};
    if (limit) options.limit = limit;

    const ranks = await fork.find(UserRankEntity, query, options);
    return ranks;
  }

  async create(createDTO: CreateUserRankDTO) {
    const fork = this.em.fork();

    const rank = new UserRankEntity(createDTO);
    await fork.persistAndFlush(rank);

    return rank;
  }

  async update(rank: UserRankEntity, updateDTO: UpdateUserRankDTO) {
    const fork = this.em.fork();

    fork.assign(rank, updateDTO);
    await fork.persistAndFlush(rank);

    return rank;
  }

  async delete(rank: UserRankEntity) {
    const fork = this.em.fork();

    fork.removeAndFlush(rank);
  }
}
