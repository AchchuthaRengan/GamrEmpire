import React, { useState, useEffect } from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronBarDown, BsChevronDown } from "react-icons/bs";
import { IPlatform } from "@/Interface/IGamrEmpire";
import RawgAPI from "@/pages/api/RAWGAPI";
import usePlatforms from "@/Hooks/usePlatforms";

interface Props {
  onSelect: (platform: IPlatform) => void;
  selectedPlatform: IPlatform | null;
}

function PlatformPicker({ onSelect, selectedPlatform }: Props) {

  const {data, error, isLoading} = usePlatforms();

  // const [platforms, setPlatforms] = useState<IPlatform[]>([]);
  // const [error, setError] = useState<string>("");
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const getGenres = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await RawgAPI.get("/platforms/lists/parents", {
  //         signal: controller.signal,
  //       });
  //       const data = await response.data.results;
  //       setPlatforms(data);
  //       setIsLoading(false);
  //     } catch (error: any) {
  //       setIsLoading(true);
  //       setError(error);
  //       setIsLoading(false);
  //     }
  //   };
  //   getGenres();
  // }, []);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform?.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform:IPlatform) => {
          return (
            <MenuItem
              onClick={() => {
                onSelect(platform);
              }}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default PlatformPicker;
