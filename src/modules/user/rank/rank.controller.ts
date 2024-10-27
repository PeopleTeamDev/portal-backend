import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { CreateRankDTO } from "./dtos/create-rank.dto";
import { FindManyRankDTO } from "./dtos/find-many-rank.dto";
import { FindOneRankDTO } from "./dtos/find-one-rank.dto";
import { UpdateRankDTO } from "./dtos/update-rank.dto";
import { RankService } from "./rank.service";

@Controller()
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Get("/rank")
  async findOne(@Query() findOneDTO: FindOneRankDTO) {
    const rank = await this.rankService.findOne(findOneDTO);
    return { rank };
  }

  @Get("/ranks")
  async findMany(@Query() findManyDTO: FindManyRankDTO) {
    const { ranks } = await this.rankService.findMany(findManyDTO);
    const next = ranks.length ? ranks[ranks.length - 1].id : null;
    return { ranks, next };
  }

  @Post("/rank")
  async create(@Body() createDTO: CreateRankDTO) {
    const rank = await this.rankService.create(createDTO);
    return { rank };
  }

  @Patch("/rank/:id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateDTO: UpdateRankDTO) {
    const rank = await this.rankService.update(id, updateDTO);
    return { rank };
  }

  @Delete("/rank/:id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    const rank = await this.rankService.delete(id);
    return { rank };
  }
}
