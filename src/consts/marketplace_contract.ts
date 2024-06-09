import type { Chain } from "thirdweb";
import { degenz,hamz } from "./chains";

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



];
