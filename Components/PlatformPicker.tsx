import React, { useState, useEffect } from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronBarDown, BsChevronDown } from "react-icons/bs";
import { Platform } from "@/Interface/IGamrEmpire";
import RawgAPI from "@/pages/api/RAWGAPI";

function PlatformPicker() {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const getGenres = async () => {
      try {
        setIsLoading(true);
        const response = await RawgAPI.get("/platforms/lists/parents", {
          signal: controller.signal,
        });
        const data = await response.data.results;
        setPlatforms(data);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(true);
        setError(error);
        setIsLoading(false);
      }
    };
    getGenres();
  }, []);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => {
          return <MenuItem key={platform.id}>{platform.name}</MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
}

export default PlatformPicker;