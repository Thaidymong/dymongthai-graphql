import { knx } from "src/connections/CreateKnexConnections";
import { CategoryInput } from "src/types/Category";

export const CreateCategoryMutation = async(_,{input}:{input: CategoryInput},{})=>{
    const {name, code} = input;
    const createCategory = await knx("category").insert({
        name,
        code,
    });
    if(createCategory){
        return true;
    }else{
        return false;
    }
}