import { Migration } from "@mikro-orm/migrations";

export class Migration20241027210355 extends Migration {
  override async up(): Promise<void> {
    this.addSql(`create schema if not exists "user";`);
    this.addSql(
      `create table "user"."rank" ("id" serial primary key, "name" varchar(255) not null, "description" varchar(255) not null);`,
    );
    this.addSql(`alter table "user"."rank" add constraint "rank_name_unique" unique ("name");`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "user"."rank" cascade;`);

    this.addSql(`drop schema if exists "user";`);
  }
}
