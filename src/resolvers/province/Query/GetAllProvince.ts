import { knx } from "src/connections/CreateKnexConnections"

export const GetAllProvince = async()=>{
    const provinces = await knx("province");
    return provinces;
}