import { Body, Controller, Get, Post, Put, Query, Delete, Res } from "@nestjs/common";
import { CreateWeekDTO } from "./objects/create-week.dto";
import { FindOneWeekDTO } from "./objects/find-one-week.dto";
import { WeekService } from "./week.service";
import { DeleteWeekDTO } from "./objects/delete-week.dto";
import { UpdateWeekDTO } from "./objects/update-week.dto";

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
  
  @Post("/weeks")
  async update(@Body() updateDTO: UpdateWeekDTO) {
    const week = await this.weekService.update(updateDTO);
    return { week };
  }

  @Delete("/week")
  async delete(@Query() deleteDTO : DeleteWeekDTO) {
    const week = await this.weekService.delete(deleteDTO);
    return { week };
  }

}
