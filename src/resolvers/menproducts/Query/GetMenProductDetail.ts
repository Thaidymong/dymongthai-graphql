import { knx } from "src/connections/CreateKnexConnections"

export const GetMenProductsDetail = async(_,{id}:{id:number},{})=>{
    const menproduct = await knx("menproduct").where({id}).first();
    return menproduct;
}