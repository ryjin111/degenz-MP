import type { Chain } from "thirdweb";
import { hamz, degenz } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0x794545BD165986a38Dbf36086d8eDC1063f99Ff4",
    chain: degenz,
    title: "DegenZ",
    thumbnailUrl:
      "https://i.ibb.co/7rhj2ct/512.png",
    type: "ERC721",
  },

  
  
];
