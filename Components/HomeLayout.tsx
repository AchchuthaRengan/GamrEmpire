import React, { useState } from "react";
import { Grid, GridItem, Show, Box, Flex } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import GenreList from "./GenreList";
import { Genre, Platform } from "@/Interface/IGamrEmpire";
import PlatformPicker from "./PlatformPicker";

function HomeLayout() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const selectGenreHandler = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  const selectPlatformHandler = (platform: Platform) => {
    setSelectedPlatform(platform);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" ""main`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" borderBottom="2px" padding="10px">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList onSelect={selectGenreHandler} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={10}>
          <Flex paddingTop={5}>
            <Box marginRight={5}>
              <PlatformPicker onSelect={selectPlatformHandler} selectedPlatform={selectedPlatform}/>
            </Box>
          </Flex>
        </Box>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
      </GridItem>
    </Grid>
  );
}

export default HomeLayout;
