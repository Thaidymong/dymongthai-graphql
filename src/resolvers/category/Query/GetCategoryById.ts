import { knx } from "src/connections/CreateKnexConnections"

export const GetCategoryById = async(_,{id}:{id:number},{})=>{
    const categoryOne = await knx("category").where({id}).first();
    return categoryOne;
}