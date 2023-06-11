import React from "react";
import { Grid,GridItem,Show } from "@chakra-ui/react";
import NavBar from "./NavBar";

function HomeLayout() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" ""main`,
        lg: `"nav nav" "aside main"`,
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
            Games
        </GridItem>
    </Grid>
  );
}

export default HomeLayout;
