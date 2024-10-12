import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function main() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT;
  if (!port) throw new Error("PORT is not defined in .env file");

  await app.listen(port);
}

main();
