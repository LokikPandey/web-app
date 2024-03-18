import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";
function Footer() {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={"white"} textAlign={['center','left']}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} width={"full"} px={"4"}>
          <Heading size="md" textTransform={"uppercase"} >
            Subscribe for exciting contents
          </Heading>
          <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input
              placeholder="Enter email here"
              border={"none"}
              borderRadius="10"
              outline={"none"}
              focusBorderColor="none"
            />
            <Button
              p={0}
              color={"purple"}
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={20}></AiOutlineSend>
            </Button>
          </HStack>
        </VStack>

        <VStack
          width={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
            <Heading textTransform={'uppercase'} textAlign={'center'}>Video Hub</Heading>
            <Text>All rights reserved</Text>
        </VStack>
        <VStack width={"full"}>
            <Heading size={'md'} textTransform={'uppercase'}>
                Social media
            </Heading>
            <Button variant={'link'} colorScheme={"whiteAlpha"}>
                <a href="https://youtube.com">Youtube</a>
            </Button>
            <Button variant={'link'} colorScheme={"whiteAlpha"}>
                <a href="https://youtube.com">Github</a>
            </Button>
            <Button variant={'link'} colorScheme={"whiteAlpha"}>
                <a href="https://youtube.com">LinkedIn</a>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
