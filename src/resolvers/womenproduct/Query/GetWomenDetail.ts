import { knx } from "src/connections/CreateKnexConnections"

export const GetWomenDetail = async(_,{id}:{id:number},{})=>{
    const womendetail = await knx("womenproduct").where({id}).first();
    return womendetail;
}