import { EntityManager, FilterQuery, UpdateOptions } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { CreateWeekDTO } from "./objects/create-week.dto";
import { FindOneWeekDTO } from "./objects/find-one-week.dto";
import { WeekEntity } from "./week.entity";
import { DeleteWeekDTO } from "./objects/delete-week.dto";
import { Week } from "./week.interface";
import { UpdateWeekDTO } from "./objects/update-week.dto";

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

  async update(updateDTO: UpdateWeekDTO, week: WeekEntity) {
    const fork = this.em.fork();
    const { new_number, new_beginAt, new_endAt } = updateDTO;
  
    if (new_number) week.number = new_number;
    if (new_beginAt) week.beginAt = new_beginAt;
    if (new_endAt) week.endAt = new_endAt;

    return week;
  }

  async delete(week: WeekEntity) {
    const fork = this.em.fork();
    fork.removeAndFlush(week);
  }
}
