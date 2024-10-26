import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateWeekDTO } from "./dtos/create-week.dto";
import { FindManyWeekDTO } from "./dtos/find-many-week.dto";
import { FindOneWeekDTO } from "./dtos/find-one-week.dto";
import { UpdateWeekDTO } from "./dtos/update-week.dto";
import { WeekRepository } from "./week.repository";

@Injectable()
export class WeekService {
  constructor(private readonly weekRepository: WeekRepository) {}

  async findOne(findOneDTO: FindOneWeekDTO) {
    // Find one week
    const week = await this.weekRepository.findOne(findOneDTO);
    return week;
  }

  async findMany(findManyDTO: FindManyWeekDTO) {
    // Find many weeks
    const weeks = await this.weekRepository.findMany(findManyDTO);
    return { weeks };
  }

  async create(createDTO: CreateWeekDTO) {
    // Find week with same number
    const week = await this.weekRepository.findOne({ number: createDTO.number });
    if (week) throw new ConflictException("Week with this number already exists");

    // Create week
    const createdWeek = await this.weekRepository.create(createDTO);
    return createdWeek;
  }

  async update(id: number, updateDTO: UpdateWeekDTO) {
    // Find week to be updated
    const week = await this.weekRepository.findOne({ id });
    if (!week) throw new NotFoundException("Week not found");

    // Update week
    const updatedWeek = await this.weekRepository.update(week, updateDTO);
    return updatedWeek;
  }

  async delete(id: number) {
    // Find week to be deleted
    const week = await this.weekRepository.findOne({ id });
    if (!week) throw new NotFoundException("Week not found");

    // Delete week
    this.weekRepository.delete(week);
    return week;
  }
}
