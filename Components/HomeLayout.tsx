import React,{useState} from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import GenreList from "./GenreList";
import { Genre } from "@/Interface/IGamrEmpire";

function HomeLayout() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const selectGenreHandler = (genre:Genre) => {
    setSelectedGenre(genre);
  }
  
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
          <GenreList onSelect={selectGenreHandler}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default HomeLayout;
