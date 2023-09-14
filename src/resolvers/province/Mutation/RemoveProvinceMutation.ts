import { knx } from "src/connections/CreateKnexConnections"

export const RemoveProvineMutation = async(_,{id}:{id:number},{})=>{
    const removeProvince = await knx("province").del().where({id});
    if(removeProvince){
        return true;
    }else{
        return false;
    }
}