import { Body, Controller, Get, Post, Put, Query } from "@nestjs/common";
import { CreateWeekDTO } from "./objects/create-week.dto";
import { FindOneWeekDTO } from "./objects/find-one-week.dto";
import { WeekService } from "./week.service";

@Controller()
export class WeekController {
  constructor(private readonly weekService: WeekService) {}

  @Get("/week")
  async findOne(@Query() findOneDTO: FindOneWeekDTO) {
    const week = await this.weekService.findOne(findOneDTO);
    return { week };
  }

  // findMany

  @Post("/weeks")
  async create(@Body() createDTO: CreateWeekDTO) {
    const week = await this.weekService.create(createDTO);
    return { week };
  }

  // update
  // delete
}
