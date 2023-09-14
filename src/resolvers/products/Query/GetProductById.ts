import { knx } from "src/connections/CreateKnexConnections"

export const GetProductByID = async(_,{id}:{id:number},{})=>{
    const productsDetail = await knx("products").where({id}).first();
    return productsDetail;
}