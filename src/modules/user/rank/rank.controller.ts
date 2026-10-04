import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { CreateUserRankDTO } from "./dtos/create-rank.dto";
import { FindManyUserRankDTO } from "./dtos/find-many-rank.dto";
import { FindOneUserRankDTO } from "./dtos/find-one-rank.dto";
import { UpdateUserRankDTO } from "./dtos/update-rank.dto";
import { UserRankService } from "./rank.service";

@Controller()
export class UserRankController {
  constructor(private readonly rankService: UserRankService) {}

  @Get("/rank")
  async findOne(@Query() findOneDTO: FindOneUserRankDTO) {
    const rank = await this.rankService.findOne(findOneDTO);
    return { rank };
  }

  @Get("/ranks")
  async findMany(@Query() findManyDTO: FindManyUserRankDTO) {
    const { ranks } = await this.rankService.findMany(findManyDTO);
    const next = ranks.length ? ranks[ranks.length - 1].id : null;
    return { ranks, next };
  }

  @Post("/rank")
  async create(@Body() createDTO: CreateUserRankDTO) {
    console.log(createDTO);
    const rank = await this.rankService.create(createDTO);
    return { rank };
  }

  @Patch("/rank/:id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateDTO: UpdateUserRankDTO) {
    const rank = await this.rankService.update(id, updateDTO);
    return { rank };
  }

  @Delete("/rank/:id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    const rank = await this.rankService.delete(id);
    return { rank };
  }
}
