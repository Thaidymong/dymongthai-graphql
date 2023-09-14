import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    if(!(await knex.schema.hasTable("slidebanner"))){
        return knex.schema.createTable("slidebanner",(table)=>{
            table.increments();
            table.string("image");
            table.timestamps(true,true);
        })
    }
}


export async function down(knex: Knex): Promise<void> {
}

