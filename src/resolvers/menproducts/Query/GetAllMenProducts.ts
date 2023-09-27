import { knx } from "src/connections/CreateKnexConnections"

export const GetAllMenProducts = async ()=>{
    const menproducts = await knx("menproduct");
    return menproducts.map((item)=>{
        return{
            ...item,
        };
    });
};