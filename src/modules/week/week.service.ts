import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateWeekDTO } from "./objects/create-week.dto";
import { FindOneWeekDTO } from "./objects/find-one-week.dto";
import { WeekRepository } from "./week.repository";
import { DeleteWeekDTO } from "./objects/delete-week.dto";
import { UpdateWeekDTO } from "./objects/update-week.dto";

@Injectable()
export class WeekService {
  constructor(private readonly weekRepository: WeekRepository) {}

  async findOne(findOneDTO: FindOneWeekDTO) {
    // Find one week
    const week = await this.weekRepository.findOne(findOneDTO);
    return week;
  }

  async create(createDTO: CreateWeekDTO) {
    // Check if week exists
    const weekExists = await this.weekRepository.findOne({ number: createDTO.number });
    if (weekExists) throw new ConflictException("Week with this number already exists");

    // Create week
    const week = await this.weekRepository.create(createDTO);
    return week;
  }

  async update(updateDTO: UpdateWeekDTO) {
    // Find week to be updated
    const week = await this.weekRepository.findOne({ number: updateDTO.new_number });
    if (!week) throw new NotFoundException("Week not found");

    // Update week 
    const new_week = await this.weekRepository.update(updateDTO, week)
    return new_week;
  } 

  async delete(deleteDTO: DeleteWeekDTO) {
    // Find week to be deleted if exists
    const week = await this.weekRepository.findOne(deleteDTO);
    if (!week) throw new NotFoundException("Week not found");

    // Delete week
    this.weekRepository.delete(week);
    return week;
  }
}
