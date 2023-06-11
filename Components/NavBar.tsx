import React from "react";
import { HStack, Heading } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import ThemeToggler from "./ThemeToggler";

function NavBar() {
  return (
    <HStack justifyContent='space-evenly'>
      <Heading
        fontSize={{ base: "18px", md: "40px", lg: "56px" }}
        fontWeight="500"
        whiteSpace="nowrap"
      >
        Gamr Empire
      </Heading>      
      <SearchBar/>
      <ThemeToggler/>      
    </HStack>
  );
}

export default NavBar;
