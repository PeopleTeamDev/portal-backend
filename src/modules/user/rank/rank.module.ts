import { Module } from "@nestjs/common";
import { RankController } from "./rank.controller";
import { RankRepository } from "./rank.repository";
import { RankService } from "./rank.service";

@Module({
  controllers: [RankController],
  providers: [RankRepository, RankService],
})
export class RankModule {}
