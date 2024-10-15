import { NestFactory } from "@nestjs/core";
import dotenv from "dotenv";
import { AppModule } from "./app.module";

async function main() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT;
  if (!port) throw new Error("PORT is not defined in .env file");

  await app.listen(port);
}

main();
