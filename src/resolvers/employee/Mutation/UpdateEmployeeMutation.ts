import { knx } from "src/connections/CreateKnexConnections";
import { EmployeeInput } from "src/types/Employee";

export const UpdateEmployeeMutation = async(_,{id,input}:{id: number, input:EmployeeInput},{})=>{
    const {firstname,lastname,gender,tel,email,base_salary,address,country,province_id} = input;
    const updateEmployee = await knx("employee").update({
        firstname,
        lastname,
        gender,
        tel,
        email,
        base_salary,
        address,
        country,
        province_id
    }).where({id});
    if(updateEmployee){
        return true;
    }else{
        return false;
    }
}