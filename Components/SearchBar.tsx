import React from 'react';
import { InputLeftElement,InputGroup,Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (    
    <InputGroup>
        <InputLeftElement children={<BsSearch/>}/>
        <Input borderRadius={20} placeholder='Search Games' variant='filled' borderWidth='2px' borderStyle='solid' borderColor='white'>
        </Input>
    </InputGroup>
  )
}

export default SearchBar