import React from 'react';
import { Grid, GridItem, Show, HStack, Heading,InputGroup,Input } from "@chakra-ui/react";

function SearchBar() {
  return (
    <InputGroup>
        <Input borderRadius={20} placeholder='Search Games' variant='filled'>
        </Input>
    </InputGroup>
  )
}

export default SearchBar