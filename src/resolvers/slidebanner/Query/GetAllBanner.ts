import { knx } from "src/connections/CreateKnexConnections";

export const GetAllSlideBanner = async () => {
  const banner = await knx("slidebanner");

  return banner.map((item) => {
    return {
      ...item,
    };
  });
};
