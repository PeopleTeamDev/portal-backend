import { EntityManager, FilterQuery } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { CreateWeekDTO } from "./objects/create-week.dto";
import { FindOneWeekDTO } from "./objects/find-one-week.dto";
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

  async create(createDTO: CreateWeekDTO) {
    const fork = this.em.fork();

    const week = new WeekEntity(createDTO);
    await fork.persistAndFlush(week);

    return week;
  }
}
