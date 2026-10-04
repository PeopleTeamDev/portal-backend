import { EntityManager, FilterQuery, FindOptions } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { CreateWeekDTO } from "./dtos/create-week.dto";
import { FindManyWeekDTO } from "./dtos/find-many-week.dto";
import { FindOneWeekDTO } from "./dtos/find-one-week.dto";
import { UpdateWeekDTO } from "./dtos/update-week.dto";
import { WeekEntity } from "./week.entity";

@Injectable()
export class WeekRepository {
  constructor(private readonly em: EntityManager) {}

  async findOne(findOneDTO: FindOneWeekDTO) {
    const fork = this.em.fork();
    const { id, number, date } = findOneDTO;

    const query: FilterQuery<WeekEntity> = {};
    query.$and = [];
    if (id) query.$and.push({ id });
    if (number) query.$and.push({ number });
    if (date) query.$and.push({ beginAt: { $lte: date }, endAt: { $gte: date } });

    const week = await fork.findOne(WeekEntity, query);
    return week;
  }

  async findMany(findManyDTO: FindManyWeekDTO) {
    const fork = this.em.fork();
    const { ids, numbers, cursor, limit } = findManyDTO;

    const query: FilterQuery<WeekEntity> = {};
    query.$and = [];
    if (ids) query.$and.push({ id: { $in: ids } });
    if (numbers) query.$and.push({ number: { $in: numbers } });
    if (cursor) query.$and.push({ id: { $gt: cursor } });

    const options: FindOptions<WeekEntity> = {};
    if (limit) options.limit = limit;

    const weeks = await fork.find(WeekEntity, query, options);
    return weeks;
  }

  async create(createDTO: CreateWeekDTO) {
    const fork = this.em.fork();

    const week = new WeekEntity(createDTO);
    await fork.persistAndFlush(week);

    return week;
  }

  async update(week: WeekEntity, updateDTO: UpdateWeekDTO) {
    const fork = this.em.fork();

    fork.assign(week, updateDTO);
    await fork.persistAndFlush(week);

    return week;
  }

  async delete(week: WeekEntity) {
    const fork = this.em.fork();

    fork.removeAndFlush(week);
  }
}
