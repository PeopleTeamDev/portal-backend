import { Module } from "@nestjs/common";
import { UserRankModule } from "../rank/rank.module";
import { UserRankAccessController } from "./rank-access.controller";
import { UserRankAccessRepository } from "./rank-access.repository";
import { UserRankAccessService } from "./rank-access.service";

@Module({
  imports: [UserRankModule],
  controllers: [UserRankAccessController],
  providers: [UserRankAccessRepository, UserRankAccessService],
})
export class UserRankAccessModule {}
