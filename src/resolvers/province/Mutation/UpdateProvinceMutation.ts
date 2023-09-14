import { knx } from "src/connections/CreateKnexConnections";
import { ProvinceInput } from "src/types/Province";

export const UpdateProvinceMutation = async(_,{id, input}:{id: number, input: ProvinceInput},{})=>{
    const { name, description} = input;
    const updateProvince = await knx("province").update({name, description}).where({id});
    if(updateProvince){
        return true;
    }else{
        return false;
    }
}