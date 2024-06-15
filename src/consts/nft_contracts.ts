import type { Chain } from "thirdweb";
import { avalancheFuji, degenz, hamz, polygonAmoy } from "./chains";

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
  {
    address: "0x8A53ED5189ca8D5cAc4149d75408cec047CD5b2e",
    chain: degenz,
    title: "Degen Punks by Apex777",
    thumbnailUrl:
      "https://dpunks.apexdeployer.xyz/metadata/2.png",
    type: "ERC721",
  },

  {
    address: "0xd1Ee96F8859Da046781cACa35EF0FF2A0307570C",
    chain: hamz,
    title: "Ham Punks by Apex777",
    thumbnailUrl:
      "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/e8e82d62-fb6d-4c87-ca58-c80ea9eddb00/original",
    type: "ERC721",
  },
 
];
