import { knx } from "src/connections/CreateKnexConnections"

export const RemoveCategoryMutation = async(_,{id}:{id: number},{})=>{
    const removeCategory = await knx("category").del().where({id});
    if(removeCategory){
        return true;
    }else{
        return false;
    }
}