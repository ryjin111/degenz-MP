"use client";

import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex>
      <Box mt="24px" m="auto">
        <Flex direction="column" gap="4">
          {/* Delete this <Card /> in your own app */}
          <Card border="1px" maxW="90vw" mx="auto">
            <CardHeader>
              <Heading size="md">You can check your Owned NFTs in profile</Heading>
              </CardHeader>
              <CardHeader>
              <Heading size="md">DegenZ collection Buy and Sell will be available soon</Heading>
              <Heading size="md">You can mint DegenZ here: 
              <a href ="https://mintdegenz.cavern.store/"><u> DegenZ Mint Page </u></a></Heading>
            </CardHeader>

       
          </Card>
          <Heading ml="20px" mt="40px">
           <center> Available Collections</center>
          </Heading>
          <Flex
            direction="row"
            wrap="wrap"
            mt="20px"
            gap="5"
            justifyContent="space-evenly"
          >
            {NFT_CONTRACTS.map((item) => (
              <Link
                _hover={{ textDecoration: "none" }}
                w={300}
                h={400}
                key={item.address}
                href={`/collection/${item.chain.id.toString()}/${item.address}`}
              >
                <Image src={item.thumbnailUrl} />
                <Text fontSize="large" mt="10px">
                  {item.title}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

// Delete this in your own app
const _latestUpdates: Array<{ title: string; bullet_points: string[] }> = [
  {
    title: "Latest software",
    bullet_points: [
      "Shipped with the latest thirdweb SDK (v5) and Next.js 14 (App router)",
    ],
  },
  {
    title: "Multi-chain",
    bullet_points: [
      "Seamlessly trade and browse items on multiple chains",
      "You'd have to deploy a thirdweb Marketplace V3 contract on each of the chains you want to support",
    ],
  },
  {
    title: "Multiple collections supported",
    bullet_points: [
      "The new template now supports multiple collections, you can view your owned NFTs and your listings",
    ],
  },
  {
    title: "Upcoming features",
    bullet_points: [
      "Select different currencies (ERC20) when creating listings",
      "UI for English Auctions",
    ],
  },
  {
    title: "Contribute",
    bullet_points: [
      "We welcome all contributions from the community.",
      "Found a bug or have some suggestions? Create a GitHub issue!",
      "Repo: https://github.com/thirdweb-example/marketplace-template",
    ],
  },
];
