import React, { useState } from "react";
import { Grid, GridItem, Show, Box, Flex } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import GenreList from "./GenreList";
import { IGameQuery, IGenre, IPlatform } from "@/Interface/IGamrEmpire";
import PlatformPicker from "./PlatformPicker";
import SortSelector from "./SortSelector";

function HomeLayout() {

  //Previously Implemented For Easy Implementation -- Not Refactored

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );
  // const [selectedSorting, setSelectedSorting] = useState<string>("");
  // const [searchedString, setSearchedString] = useState<string>("");

  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);

  const selectGenreHandler = (genre: IGenre) => {
    //Passing All existing gameQuery(platforms, sortOrder, search) with the new Genre is through a object with the spread Operator
    setGameQuery({...gameQuery,genre});
  };

  const selectPlatformHandler = (platform: IPlatform) => {
    setGameQuery({...gameQuery,platform});
  };

  const selectOrderingHandler = (sortOrder: string) => {
    setGameQuery({...gameQuery,sortOrder});
  };

  const searchHandler = (search: string) => {
    setGameQuery({...gameQuery,search});
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
          <GenreList onSelect={selectGenreHandler} selectedGenre={gameQuery.genre}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={10}>
          <Flex paddingTop={5}>
            <Box marginRight={5}>
              <PlatformPicker
                onSelect={selectPlatformHandler}
                selectedPlatform={gameQuery.platform}
              />
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelect={selectOrderingHandler}
            />
          </Flex>
        </Box>
        <GameGrid
          // selectedGenre={gameQuery.genre}
          // selectedPlatform={gameQuery.platform}
          // selectedSorting={gameQuery.sortOrder}
          // searchedString={gameQuery.search}
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  );
}

export default HomeLayout;
