import { knx } from "src/connections/CreateKnexConnections";
import { ProductsInput } from "src/types/Products";

export const CreateProductsMutaiton = async(_,{input}:{input:ProductsInput},{})=>{
    const {title,summary,description,image,category_id}= input;
    const createProducts = await knx("products").insert({
        title,
        summary,
        description,
        image,
        category_id
    })
    if(createProducts){
        return true;

    }else{
        return false;
    }
}