import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { RiArrowDownLine } from "react-icons/ri";

export default function Landing() {
  return (
    <Flex minH="90vh" maxH="90vh">
      <Flex align="center" fontSize="2xl" alignSelf="end" ml="5vw" mb="5vh">
        saiba mais <RiArrowDownLine />
      </Flex>
      <Text
        alignSelf="end"
        textAlign={"end"}
        ml="auto"
        mr="5vw"
        mb="5vh"
        fontSize="8xl"
      >
        Desenvolvedor <br /> Full Stack
      </Text>
    </Flex>
  );
}
