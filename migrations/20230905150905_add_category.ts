import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    if(!(await knex.schema.hasTable("category"))){
        return knex.schema.createTable("category", (table)=>{
            table.increments();
            table.string("name");
            table.string("code");
            table.timestamps(true,true);
        })
    }
}


export async function down(knex: Knex): Promise<void> {
}

