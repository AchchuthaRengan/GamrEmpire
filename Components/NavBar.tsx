import React from "react";
import { Grid, GridItem, Show, HStack, Heading } from "@chakra-ui/react";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <HStack>
      <Heading
        fontSize={{ base: "18px", md: "40px", lg: "56px" }}
        fontWeight="500"
        whiteSpace="nowrap"
      >
        Gamr Empire
      </Heading>      
    </HStack>
  );
}

export default NavBar;
