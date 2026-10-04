import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Global, Module } from "@nestjs/common";
import DatabaseConfig from "./database.config";

const MikroORM = MikroOrmModule.forRoot(DatabaseConfig);

@Global()
@Module({
  imports: [MikroORM],
  exports: [MikroORM],
})
export class DatabaseModule {}
