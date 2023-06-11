import React from "react";
import { HStack, Heading } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import ThemeToggler from "./ThemeToggler";

interface Props {
  onSearch:(search:string) => void;
}

function NavBar({onSearch}:Props) {
  return (
    <HStack padding="10px">
      <Heading
        fontSize={{ base: "18px", md: "40px", lg: "56px" }}
        fontWeight="500"
        whiteSpace="nowrap"
      >
        Gamr Empire
      </Heading>      
      <SearchBar onSearch={onSearch}/>
      <ThemeToggler/>      
    </HStack>
  );
}

export default NavBar;
