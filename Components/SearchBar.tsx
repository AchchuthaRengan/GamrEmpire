import React, { FormEvent, useRef } from "react";
import { InputLeftElement, InputGroup, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import classes from "../styles/Home.module.css";

interface Props {
  onSearch: (search: string) => void;
}

function SearchBar({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) {
      onSearch(ref.current.value);
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search Games"
          variant="filled"
          borderWidth="2px"
          borderStyle="solid"                    
          ref={ref}
        ></Input>
      </InputGroup>
    </form>
  );
}

export default SearchBar;
