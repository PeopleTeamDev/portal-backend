import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { CreateUserRankAccessDTO } from "./dtos/create-rank-access.dto";
import { FindManyUserRankAccessDTO } from "./dtos/find-many-rank-access.dto";
import { FindOneUserRankAccessDTO } from "./dtos/find-one-rank-access.dto";
import { UpdateUserRankAccessDTO } from "./dtos/update-rank-access.dto";
import { UserRankAccessService } from "./rank-access.service";

@Controller("rank")
export class UserRankAccessController {
  constructor(private readonly accessService: UserRankAccessService) {}

  @Get("access")
  async findOne(@Query() findOneDTO: FindOneUserRankAccessDTO) {
    const rankAccess = await this.accessService.findOne(findOneDTO);
    return { rankAccess };
  }

  @Get("accesses")
  async findMany(@Query() findManyDTO: FindManyUserRankAccessDTO) {
    const rankAccesses = await this.accessService.findMany(findManyDTO);
    return { rankAccesses };
  }

  @Post("access")
  async create(@Body() createDTO: CreateUserRankAccessDTO) {
    const rankAccess = await this.accessService.create(createDTO);
    return { rankAccess };
  }

  @Patch("access/:id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateDTO: UpdateUserRankAccessDTO) {
    const rankAccess = await this.accessService.update(id, updateDTO);
    return { rankAccess };
  }

  @Delete("access/:id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    const rankAccess = await this.accessService.delete(id);
    return { rankAccess };
  }
}
