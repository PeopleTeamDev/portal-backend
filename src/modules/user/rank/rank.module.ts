import { Module } from "@nestjs/common";
import { UserRankController } from "./rank.controller";
import { UserRankRepository } from "./rank.repository";
import { UserRankService } from "./rank.service";

@Module({
  controllers: [UserRankController],
  providers: [UserRankRepository, UserRankService],
  exports: [UserRankService],
})
export class UserRankModule {}
