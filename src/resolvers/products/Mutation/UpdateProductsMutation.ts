import { knx } from "src/connections/CreateKnexConnections";
import { ProductsInput } from "src/types/Products";

export const UpdateProductsMutation = async(_,{id, input}:{id: number, input: ProductsInput},{})=>{
    const {title,summary,description,image,category_id}= input;
    const updateProducts = await knx("products").update({
        title,
        summary,
        description,
        image,
        category_id
    })
    .where({id});
    if(updateProducts){
        return true;
    }else{
        return false;
    }
}