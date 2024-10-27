import { Injectable } from "@nestjs/common";
import { ConflictException } from "@nestjs/common";
import { NotFoundException } from "@nestjs/common";
import { CreateRankDTO } from "./dtos/create-rank.dto";
import { FindManyRankDTO } from "./dtos/find-many-rank.dto";
import { FindOneRankDTO } from "./dtos/find-one-rank.dto";
import { RankRepository } from "./rank.repository";

@Injectable()
export class RankService {
  constructor(private readonly rankRepository: RankRepository) {}

  async findOne(findOneDTO: FindOneRankDTO) {
    const rank = await this.rankRepository.findOne(findOneDTO);
    return rank;
  }

  async findMany(findManyDTO: FindManyRankDTO) {
    const ranks = await this.rankRepository.findMany(findManyDTO);
    return { ranks };
  }

  async create(createDTO: CreateRankDTO) {
    const rank = await this.rankRepository.findOne({ name: createDTO.name });
    if (rank) throw new ConflictException("Rank with this name already exists");

    const createdRank = await this.rankRepository.create(createDTO);
    return createdRank;
  }

  async update(id: number, updateDTO: FindOneRankDTO) {
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
