import { EntityManager, FilterQuery } from "@mikro-orm/core";
import { FindOptions } from "@mikro-orm/core";
import { Injectable } from "@nestjs/common";
import { CreateRankDTO } from "./dtos/create-rank.dto";
import { FindManyRankDTO } from "./dtos/find-many-rank.dto";
import { FindOneRankDTO } from "./dtos/find-one-rank.dto";
import { UpdateRankDTO } from "./dtos/update-rank.dto";
import { RankEntity } from "./rank.entity";

@Injectable()
export class RankRepository {
  constructor(private readonly em: EntityManager) {}
  async findOne(findOneDTO: FindOneRankDTO) {
    const fork = this.em.fork();
    const { id, name } = findOneDTO;

    const query: FilterQuery<RankEntity> = {};
    query.$and = [];
    if (id) query.$and.push({ id });
    if (name) query.$and.push({ name });

    const rank = await fork.findOne(RankEntity, query);
    return rank;
  }

  async findMany(findManyDTO: FindManyRankDTO) {
    const fork = this.em.fork();
    const { ids, names, cursor, limit } = findManyDTO;

    const query: FilterQuery<RankEntity> = {};
    query.$and = [];
    if (ids) query.$and.push({ id: { $in: ids } });
    if (names) query.$and.push({ name: { $in: names } });
    if (cursor) query.$and.push({ id: { $gt: cursor } });

    const options: FindOptions<RankEntity> = {};
    if (limit) options.limit = limit;

    const ranks = await fork.find(RankEntity, query, options);
    return ranks;
  }

  async create(createDTO: CreateRankDTO) {
    const fork = this.em.fork();

    const rank = new RankEntity(createDTO);
    await fork.persistAndFlush(rank);

    return rank;
  }

  async update(rank: RankEntity, updateDTO: UpdateRankDTO) {
    const fork = this.em.fork();

    fork.assign(rank, updateDTO);
    await fork.persistAndFlush(rank);

    return rank;
  }

  async delete(rank: RankEntity) {
    const fork = this.em.fork();

    fork.removeAndFlush(rank);
  }
}
