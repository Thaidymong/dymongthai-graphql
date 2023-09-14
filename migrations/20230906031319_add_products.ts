import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    if (!(await knex.schema.hasTable("products"))) {
        return knex.schema.createTable("products", (table) => {
          table.increments();
          table.string("title");
          table.string("summary");
          table.string("description");
          table.string("image");
          table.integer("category_id");
          table.timestamps(true,true);
        });
      }
}


export async function down(knex: Knex): Promise<void> {
}

