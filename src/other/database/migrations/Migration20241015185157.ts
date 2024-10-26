import { Migration } from "@mikro-orm/migrations";

export class Migration20241015185157 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table "week" ("id" serial primary key, "number" int not null, "begin_at" date not null, "end_at" date not null);`,
    );
    this.addSql(`alter table "week" add constraint "week_number_unique" unique ("number");`);
  }
}
