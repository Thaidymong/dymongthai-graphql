import { knx } from "src/connections/CreateKnexConnections";
import { ProvinceInput } from "src/types/Province";

export const CreateProvinceMutation = async(_,{input}:{input: ProvinceInput},{})=>{
    const {name, description} = input;
    const createProvince = await knx("province").insert({
        name, description
    });
    if(createProvince){
        return true;
    }else{
        return false;
    }
}