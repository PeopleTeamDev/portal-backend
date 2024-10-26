import { Entity, Property } from "@mikro-orm/core";
import { CreateWeekDTO } from "./dtos/create-week.dto";
import { Week } from "./week.interface";

@Entity({ tableName: "week" })
export class WeekEntity implements Week {
  @Property({ primary: true })
  id!: number;

  @Property({ unique: true })
  number: number;

  @Property({ type: "date" })
  beginAt: Date;

  @Property({ type: "date" })
  endAt: Date;

  constructor(createDTO: CreateWeekDTO) {
    this.number = createDTO.number;
    this.beginAt = createDTO.beginAt;
    this.endAt = createDTO.endAt;
  }
}
