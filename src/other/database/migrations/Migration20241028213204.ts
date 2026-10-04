import { Migration } from "@mikro-orm/migrations";

export class Migration20241028213204 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table "user"."rank_access" ("id" serial primary key, "rank_id" int not null, "permission" varchar(255) not null);`,
    );

    this.addSql(
      `alter table "user"."rank_access" add constraint "rank_access_rank_id_foreign" foreign key ("rank_id") references "user"."rank" ("id") on update cascade;`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "user"."rank_access" cascade;`);
  }
}
