import React from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    sortOrder:string,
    onSelect:(order:string)=>void;
}

function SortSelector({sortOrder,onSelect}:Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

  return <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        {currentSortOrder?.label || 'Relevance'}
    </MenuButton>
    <MenuList>
        {sortOrders.map((sort) => {
            return <MenuItem value={sort.value} key={sort.value} onClick={() => {
                onSelect(sort.value)
            }}>{sort.label}</MenuItem>
        })}
    </MenuList>
  </Menu>;
}

export default SortSelector;
