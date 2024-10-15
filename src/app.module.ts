import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { WeekModule } from "./modules/week/week.module";
import { DatabaseModule } from "./other/database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
})
export class AppModule {}
