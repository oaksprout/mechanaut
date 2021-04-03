import * as React from 'react'
import {
  Divider,
  Image,
  Box,
  Text,
  Link,
  useColorModeValue,
  Heading,
  Flex,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { GiAtom } from 'react-icons/gi'
import OverFeature from './components/OverFeature'

export const Home = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box fontSize="xl">
      <Flex justifyContent="space-between" alignItems="center" p={3}>
        <Flex justifyContent="space-between" alignItems="center">
          <GiAtom />
          <Heading ml={1} size="md">
            Mechanaut
          </Heading>
        </Flex>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
      <Flex height="67vh" alignItems="center" justifyContent="center">
        <Box p={3} textAlign="center" justifySelf="center">
          <Heading
            as="h1"
            size="4xl"
            mb={5}
            bgGradient="linear(to-r, brand.300, brand.700)"
            bgClip="text"
            letterSpacing={-2}
          >
            The Future is Autonomous
          </Heading>
          <Text
            maxWidth="42ch"
            display="inline-block"
            justifySelf="center"
            size="lg"
            mb={5}
          >
            We are a digital cooperative focused on the intersection of
            multi-agent systems, open data and ultra long-tail finance.
            Expanding the ecosystem through investments, research+design and tools.
          </Text>
        </Box>
      </Flex>
      <OverFeature />
      <Flex
        py={10}
        alignItems="center"
        justifyContent="center"
        bg={bgColor}
      >
        <Box textAlign="center" py={10}>
          <Heading textAlign="center" size="2xl" mb={5}>
            Tools
          </Heading>
          <Divider my={5} w={50} display="inline-block" />
          <Image />
          <Heading size="lg" mb={3}>
            🏀 $BALLER
          </Heading>
          <Text
            maxWidth="42ch"
            display="inline-block"
            justifySelf="center"
            size="lg"
            mb={3}
          >
            Simulate impermanent loss on multi-asset Balancer pools
          </Text>
          <br />
          <Link href="https://baller.mechanaut.xyz" textDecoration="underline">
            Go to tool
          </Link>
          <br />
          <Divider my={5} w={50} display="inline-block" />
          <Image />
          <Heading size="lg" mb={3}>
            🍏 Apple a Day
          </Heading>
          <Text
            maxWidth="42ch"
            display="inline-block"
            justifySelf="center"
            size="lg"
            mb={3}
          >
            Try different deposit and withdrawal positions whilst keeping your
            health factor safe
          </Text>
          <br />
          <Link
            href="https://apple-a-day.mechanaut.xyz"
            textDecoration="underline"
          >
            Go to tool
          </Link>
          <br />
          <Divider my={5} w={50} display="inline-block" />
          <Image />
          <Heading size="lg" mb={3}>
            👁 Tiles
          </Heading>
          <Text
            maxWidth="42ch"
            display="inline-block"
            justifySelf="center"
            size="lg"
            mb={3}
          >
            Browse documents on the Ceramic network
          </Text>
          <br />
          <Link
            href="https://tiles.mechanaut.xyz"
            textDecoration="underline"
          >
            Go to tool
          </Link>
        </Box>
      </Flex>
      <Flex alignItems="center" justifyContent="center" py={10}>
        <Box textAlign="center" py={10}>
          <Link textDecoration="underline" href="https://mechanaut.substack.com">
            <Heading textAlign="center" size="2xl" mb={5}>Blog</Heading>
          </Link>
          <br />
          <Link textDecoration="underline" href="https://anchor.fm/machinations"><Heading textAlign="center" size="2xl" mb={5}>Podcast</Heading></Link>
          <br />
          <Link textDecoration="underline" href="https://twitter.com/mechanaut_xyz"><Heading textAlign="center" size="2xl">Twitter</Heading></Link>
        </Box>
      </Flex>
      <Box textAlign="center" p={12} bg={bgColor}>
        <Text mb={6}>Copyright 2021</Text>
        <Box display="inline-block">
          <Flex alignItems="center" fontWeight="bold">
            <Box mr={1}>
              <GiAtom />
            </Box>{' '}
            Mechanaut
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
