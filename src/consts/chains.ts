import { defineChain } from "thirdweb";

export const degenz = defineChain({
	id: 666666666,
	nativeCurrency: {
	  name: "Degen Chain",
	  symbol: "DEGEN",
	  decimals: 18,
	},
	
	blockExplorers: [
		{
		  name: "DegenChain",
		  url: "https://explorer.degen.tips",
		  apiUrl: "https://explorer.degen.tips/api/v2/",
		},
	  ],
   });

   export const hamz = defineChain({
	id: 5112,
	nativeCurrency: {
	  name: "Ether",
	  symbol: "ETH",
	  decimals: 18,
	},
	
	blockExplorers: [
		{
		  name: "DegenChain",
		  url: "https://ham.calderaexplorer.xyz",
		  apiUrl: "hhttps://ham.calderaexplorer.xyz/api/v2/",
		},
	  ],
   });
export { avalancheFuji, sepolia, polygonAmoy } from "thirdweb/chains";

/**
 * Define any custom chain using `defineChain`
 */
export const example_customChain1 = defineChain(0.001); // don't actually use this
