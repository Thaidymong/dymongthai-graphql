import { knx } from "src/connections/CreateKnexConnections";

export const GetAllWomenProducts = async () => {
  const womenproduct = await knx("womenproduct");

  return womenproduct.map((item) => {
    return {
      ...item,
    };
  });
};
