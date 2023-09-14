import { knx } from "src/connections/CreateKnexConnections"

export const GetProvinceByID = async(_,{id}:{id: number},{})=>{
    const province = await knx("province").where({id}).first();
    return province;
}