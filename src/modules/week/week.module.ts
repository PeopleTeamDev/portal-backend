import { Module } from "@nestjs/common";
import { WeekController } from "./week.controller";
import { WeekRepository } from "./week.repository";
import { WeekService } from "./week.service";

@Module({
  controllers: [WeekController],
  providers: [WeekRepository, WeekService],
})
export class WeekModule {}
