import { Game, Genre } from "@/Interface/IGamrEmpire";
import RawgAPI from "@/pages/api/RAWGAPI";
import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import CardWrapper from "./CardWrapper";


interface Props {
  selectedGenre:Genre | null
}

function GameGrid({selectedGenre}:Props) {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const getGames = async () => {
      try {
        setIsLoading(true);
        const response = await RawgAPI.get("/games", {
          signal: controller.signal,
          params:{
            genres:selectedGenre?.id
          }
        });
        const data = await response.data.results;
        setGames(data);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(true);
        setError(error);
        setIsLoading(false);
      }
    };
    getGames();
  }, [selectedGenre?.id]);

  console.log(games);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={10}
      spacing={6}
    >      
        {games &&
          !isLoading &&
          !error &&
          games.map((game) => {
            return (
              <CardWrapper key={game.id}>
                <GameCard game={game} />
              </CardWrapper>
            );
          })}      
    </SimpleGrid>
  );
}

export default GameGrid;
