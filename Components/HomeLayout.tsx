import React from "react";
import { Grid,GridItem,Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";

function HomeLayout() {
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
        <GridItem area='nav' borderBottom='2px' padding='10px'>
            <NavBar/>
        </GridItem>        
        <Show above='lg'>
        <GridItem area='aside'>
            Genres
        </GridItem>
        </Show>
        <GridItem area='main'>            
            <GameGrid/>
        </GridItem>
    </Grid>
  );
}

export default HomeLayout;
