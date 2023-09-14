import { knx } from "src/connections/CreateKnexConnections";
import { CategoryInput } from "src/types/Category"

export const UpdateCategoryMutation = async(_,{id,input}:{id: number,input: CategoryInput},{})=>{
    const {name , code} = input;
    const updateCategory = await knx("category").update({name, code}).where({id});
    if(updateCategory){
        return true;
    }else{
        return false;
    }
}