import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { UserRankService } from "../rank/rank.service";
import { CreateUserRankAccessDTO } from "./dtos/create-rank-access.dto";
import { FindManyUserRankAccessDTO } from "./dtos/find-many-rank-access.dto";
import { FindOneUserRankAccessDTO } from "./dtos/find-one-rank-access.dto";
import { UpdateUserRankAccessDTO } from "./dtos/update-rank-access.dto";
import { UserRankAccessRepository } from "./rank-access.repository";

@Injectable()
export class UserRankAccessService {
  constructor(
    private readonly accessRepository: UserRankAccessRepository,
    private readonly rankService: UserRankService,
  ) {}

  async findOne(findOneDTO: FindOneUserRankAccessDTO) {
    // Find one rank access
    const rankAccess = await this.accessRepository.findOne(findOneDTO);
    return rankAccess;
  }

  async findMany(findManyDTO: FindManyUserRankAccessDTO) {
    // Find many rank accesses
    const rankAccesses = await this.accessRepository.findMany(findManyDTO);
    return rankAccesses;
  }

  async create(createDTO: CreateUserRankAccessDTO) {
    const { rankId, permission } = createDTO;

    // Check if rank exists
    const rank = await this.rankService.findOne({ id: rankId });
    if (!rank) throw new NotFoundException("Rank not found");

    // Check if rank already has permission
    const hasPermission = await this.findOne({ rankId, permission });
    if (hasPermission) throw new ConflictException("Rank already has permission");

    // Create rank access
    const createdRankAccess = await this.accessRepository.create(createDTO);
    return createdRankAccess;
  }

  async update(id: number, updateDTO: UpdateUserRankAccessDTO) {
    // Check if rank access exists
    const rankAccess = await this.findOne({ id });
    if (!rankAccess) throw new NotFoundException("Rank access not found");

    // Update rank access
    const updatedRankAccess = await this.accessRepository.update(rankAccess, updateDTO);
    return updatedRankAccess;
  }

  async delete(id: number) {
    // Check if rank access exists
    const rankAccess = await this.findOne({ id });
    if (!rankAccess) throw new NotFoundException("Rank access not found");

    // Delete rank access
    this.accessRepository.delete(rankAccess);
    return rankAccess;
  }
}
