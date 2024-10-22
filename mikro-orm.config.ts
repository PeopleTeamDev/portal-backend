import { Options, PostgreSqlDriver } from "@mikro-orm/postgresql";
import dotenv from "dotenv";

dotenv.config();

const config: Options = {
  entities: ["./dist/**/*.entity.js"],
  entitiesTs: ["./src/**/*.entity.ts"],
  driver: PostgreSqlDriver,
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  migrations: {
    tableName: "_migrations",
    path: "./src/other/database/migrations",
    glob: "!(*.d).{js,ts}",
  },
};

export default config;
