import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Global, Module } from "@nestjs/common";
import mikroORMConfig from "../../../mikro-orm.config";

const MikroORM = MikroOrmModule.forRoot(mikroORMConfig);

@Global()
@Module({
  imports: [MikroORM],
  exports: [MikroORM],
})
export class DatabaseModule {}
