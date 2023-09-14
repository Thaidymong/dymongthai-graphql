import { knx } from "src/connections/CreateKnexConnections"

export const RemoveEmployeeMutation = async(_,{id}:{id: number},{})=>{
    const removeEmployee = await knx("employee").del().where({id});
    if(removeEmployee){
        return true;
    }else{
        return false;
    }
}