import React from "react";
import { useColorMode, HStack, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function ThemeToggler() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Button variant="solid" onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </HStack>
  );
}

export default ThemeToggler;
