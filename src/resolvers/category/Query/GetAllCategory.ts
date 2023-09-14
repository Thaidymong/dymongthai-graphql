import { knx } from "src/connections/CreateKnexConnections";

export async function GetAllCategory(){
    const category = await knx("category");
    return category.map((item)=>{
        return{
            ...item,
        }
    })
}