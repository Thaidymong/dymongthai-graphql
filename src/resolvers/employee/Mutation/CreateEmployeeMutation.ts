import { knx } from "src/connections/CreateKnexConnections";
import { EmployeeInput } from "src/types/Employee";

export const CreateEmployeeMutation = async(_,{input}:{input:EmployeeInput},{})=>{
    const {firstname,lastname,gender,tel,email,base_salary,address,country,province_id} = input;
    const createEmployee = await knx("employee").insert({
        firstname,
        lastname,
        gender,
        tel,
        email,
        base_salary,
        address,
        country,
        province_id
    });
    if(createEmployee){
        return true;
    }else{
        return false;
    }
}