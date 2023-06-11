import React, { useState } from "react";
import { Grid, GridItem, Show, Box, Flex } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import GenreList from "./GenreList";
import { Genre, Platform } from "@/Interface/IGamrEmpire";
import PlatformPicker from "./PlatformPicker";
import SortSelector from "./SortSelector";

function HomeLayout() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedSorting, setSelectedSorting] = useState<string>("");
  const [searchedString, setSearchedString] = useState<string>("");

  const selectGenreHandler = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  const selectPlatformHandler = (platform: Platform) => {
    setSelectedPlatform(platform);
  };

  const selectOrderingHandler = (order: string) => {
    setSelectedSorting(order);
  };

  const searchHandler = (search: string) => {
    setSearchedString(search);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" borderBottom="2px" padding="10px">
        <NavBar onSearch={searchHandler} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} paddingTop={5} borderRight='2px'>
          <GenreList onSelect={selectGenreHandler} selectedGenre={selectedGenre}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={10}>
          <Flex paddingTop={5}>
            <Box marginRight={5}>
              <PlatformPicker
                onSelect={selectPlatformHandler}
                selectedPlatform={selectedPlatform}
              />
            </Box>
            <SortSelector
              sortOrder={selectedSorting}
              onSelect={selectOrderingHandler}
            />
          </Flex>
        </Box>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedSorting={selectedSorting}
          searchedString={searchedString}
        />
      </GridItem>
    </Grid>
  );
}

export default HomeLayout;
