import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";

export default function OverFeature() {
  const Feature = (props: any) => (
    <Flex>
      {/* <Flex shrink={0}>
        <Flex
          alignItems="center"
          justifyContent="center"
          h={12}
          w={12}
          rounded="md"
          bg={useColorModeValue("brand.500", "brand.500")}
          color="white"
        >
          <Icon
            boxSize={6}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {props.icon}
          </Icon>
        </Flex>
      </Flex> */}
      <Box ml={4}>
        <chakra.dt
          fontSize="lg"
          fontWeight="medium"
          lineHeight="6"
          color={useColorModeValue("gray.900", "gray.900")}
        >
          {props.title}
        </chakra.dt>
        <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
  return (
    <Flex
      bg="gray.600"
      p={{base: 10, md: 20}}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={12} bg={useColorModeValue("white", "gray.800")} rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h2
              color={useColorModeValue("brand.600", "brand.600")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Projects
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900", "gray.900")}
            >
              How We've Helped
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              Mechanaut builds to help fledgling ultra high-potential
              cryptonetworks get off the ground.
            </chakra.p>
          </Box>
          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature
                title="AEA Framework Website"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
                We helped create{" "}
                <Link href="https://aea.dev" textDecor="underline" isExternal>
                  the website
                </Link>{" "}
                for Fetch.ai's AEA framework. We also created a{" "}
                <Link
                  href="http://opensea.io/collection/aea-v1-launch-commemorative"
                  textDecor="underline"
                  isExternal
                >
                  limited edition set of NFTs
                </Link>{" "}
                to commemorate the launch.
              </Feature>

              <Feature
                title="THORChain x Nexus Mutual"
                description={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
                We{" "}
                <Link
                  isExternal
                  textDecor="underline"
                  href="https://twitter.com/tannedoaksprout/status/1333771499891781634"
                >
                  initiated
                </Link>{" "}
                and{" "}
                <Link
                  isExternal
                  textDecor="underline"
                  href="https://docs.google.com/document/d/1wvwYAfQpFHz1Wym1fg3F44bF8nh5pOh8Rz0HNvfd3bQ/edit?usp=sharing"
                >
                  created a report
                </Link>{" "}
                to inform the creation of a new insurance product for THORChain
                on Nexus Mutual.
              </Feature>
              <Feature
                title="$RUNE on Aave"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              >
                We put together a{" "}
                <Link
                  isExternal
                  textDecor="underline"
                  href="https://governance.aave.com/t/listing-proposal-add-rune-erc-20-thorchain/2239"
                >
                  rigorous proposal
                </Link>{" "}
                to list $RUNE ERC-20 on Aave, opening up a credit line for the
                THORChain community.
              </Feature>

              <Feature
                title="Browser for Ceramic Documents"
                description={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              >
                We drove development of{" "}
                <Link
                  isExternal
                  textDecor="underline"
                  href="https://tiles.ceramic.community"
                >
                  Ceramic's Tiles browser
                </Link>
                , enabling the community to easily see their documents for the
                first time.
              </Feature>

              <Feature title="Impermanent Loss Calculator for Balancer">
                We received a grant from the Balancer growth team to build{" "}
                <Link
                  isExternal
                  textDecor="underline"
                  href="https://baller.mechanaut.xyz"
                >
                  BALLER
                </Link>
                , allowing the community to simulate impermanent loss across
                multi-asset pools.
              </Feature>

              <Feature title="Health Factor Check for Aave">
                <Link
                  isExternal
                  textDecor="underline"
                  href="https://apple-a-day.mechanaut.xyz"
                >
                  Apple a Day
                </Link>{" "}
                helps Aave community members to avoid liquidation by making
                enabling quick, simple calculations about their Health Factor.
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
