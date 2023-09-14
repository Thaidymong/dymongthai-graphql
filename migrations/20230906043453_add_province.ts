import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    if(!(await knex.schema.hasTable("province"))){
        return knex.schema.createTable("province",(table)=>{
            table.increments();
            table.string("name");
            table.string("description");
            table.timestamps(true,true);
        })
    }
}


export async function down(knex: Knex): Promise<void> {
}

