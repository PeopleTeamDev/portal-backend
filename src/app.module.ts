import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserRankAccessModule } from "./modules/user/rank-access/rank-access.module";
import { UserRankModule } from "./modules/user/rank/rank.module";
import { WeekModule } from "./modules/week/week.module";
import { DatabaseModule } from "./other/database/database.module";

@Module({
  imports: [DatabaseModule, WeekModule, UserRankModule, UserRankAccessModule],
  controllers: [AppController],
})
export class AppModule {}
