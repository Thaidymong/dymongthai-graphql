import { knx } from "src/connections/CreateKnexConnections"

export const RemoveProductsMutation = async(_,{id}:{id: number},{})=>{
    const removeProducts = await knx("products").del().where({id});
    return removeProducts;
}