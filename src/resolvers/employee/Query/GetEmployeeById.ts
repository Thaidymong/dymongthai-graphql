import { knx } from "src/connections/CreateKnexConnections"

export const GetEmployeeById = async(_,{id}:{id: number},{})=>{
    const employee = await knx("employee").where({id}).first();
    return employee;
}