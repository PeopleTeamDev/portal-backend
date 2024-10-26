import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { CreateWeekDTO } from "./dtos/create-week.dto";
import { FindManyWeekDTO } from "./dtos/find-many-week.dto";
import { FindOneWeekDTO } from "./dtos/find-one-week.dto";
import { UpdateWeekDTO } from "./dtos/update-week.dto";
import { WeekService } from "./week.service";

@Controller()
export class WeekController {
  constructor(private readonly weekService: WeekService) {}

  @Get("/week")
  async findOne(@Query() findOneDTO: FindOneWeekDTO) {
    const week = await this.weekService.findOne(findOneDTO);
    return { week };
  }

  @Get("/weeks")
  async findMany(@Query() findManyDTO: FindManyWeekDTO) {
    const { weeks } = await this.weekService.findMany(findManyDTO);
    const next = weeks.length ? weeks[weeks.length - 1].id : null;
    return { weeks, next };
  }

  @Post("/week")
  async create(@Body() createDTO: CreateWeekDTO) {
    const week = await this.weekService.create(createDTO);
    return { week };
  }

  @Patch("/week/:id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateDTO: UpdateWeekDTO) {
    const week = await this.weekService.update(id, updateDTO);
    return { week };
  }

  @Delete("/week/:id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    const week = await this.weekService.delete(id);
    return { week };
  }
}
