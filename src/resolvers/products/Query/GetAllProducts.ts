import { knx } from "src/connections/CreateKnexConnections";

export const GetAllProducts = async () => {
  const products = await knx("products");

  return products.map((item) => {
    return {
      ...item,
    };
  });
};
