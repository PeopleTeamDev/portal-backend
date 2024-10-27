import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { RankModule } from "./modules/user/rank/rank.module";
import { WeekModule } from "./modules/week/week.module";
import { DatabaseModule } from "./other/database/database.module";

@Module({
  imports: [DatabaseModule, WeekModule, RankModule],
  controllers: [AppController],
})
export class AppModule {}
