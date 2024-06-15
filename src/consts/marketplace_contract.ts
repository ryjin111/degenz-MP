import type { Chain } from "thirdweb";
import { avalancheFuji, polygonAmoy, sepolia, degenz,hamz } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x66bd7DBeFF2cC008Af80a8CBcAe1C6EC3086B5b1",
    chain: degenz,
  },

  {
    address: "0x0ce3808C6208C5c04F943982Ce9E97393Ed3C5F4",
    chain: hamz,
  },

];
