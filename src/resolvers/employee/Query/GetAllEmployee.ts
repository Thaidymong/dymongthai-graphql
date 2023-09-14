import { knx } from "src/connections/CreateKnexConnections"

export const GetAllEmployee = async()=>{
    const employees = await knx("employee");
    return employees;
}