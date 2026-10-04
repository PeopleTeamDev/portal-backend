import { Injectable } from "@nestjs/common";
import { ConflictException } from "@nestjs/common";
import { NotFoundException } from "@nestjs/common";
import { CreateUserRankDTO } from "./dtos/create-rank.dto";
import { FindManyUserRankDTO } from "./dtos/find-many-rank.dto";
import { FindOneUserRankDTO } from "./dtos/find-one-rank.dto";
import { UpdateUserRankDTO } from "./dtos/update-rank.dto";
import { UserRankRepository } from "./rank.repository";

@Injectable()
export class UserRankService {
  constructor(private readonly rankRepository: UserRankRepository) {}

  async findOne(findOneDTO: FindOneUserRankDTO) {
    const rank = await this.rankRepository.findOne(findOneDTO);
    return rank;
  }

  async findMany(findManyDTO: FindManyUserRankDTO) {
    const ranks = await this.rankRepository.findMany(findManyDTO);
    return { ranks };
  }

  async create(createDTO: CreateUserRankDTO) {
    const rank = await this.rankRepository.findOne({ name: createDTO.name });
    if (rank) throw new ConflictException("Rank with this name already exists");

    const createdRank = await this.rankRepository.create(createDTO);
    return createdRank;
  }

  async update(id: number, updateDTO: UpdateUserRankDTO) {
    const rank = await this.rankRepository.findOne({ id });
    if (!rank) throw new NotFoundException("Rank not found");

    const updatedRank = await this.rankRepository.update(rank, updateDTO);
    return updatedRank;
  }

  async delete(id: number) {
    const rank = await this.rankRepository.findOne({ id });
    if (!rank) throw new NotFoundException("Rank not found");

    this.rankRepository.delete(rank);
    return rank;
  }
}
