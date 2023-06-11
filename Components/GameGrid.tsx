import { Game } from "@/Interface/IGamrEmpire";
import RawgAPI from "@/pages/api/RAWGAPI";
import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const getGames = async () => {
      try {
        setIsLoading(true);
        const response = await RawgAPI.get("/games",{
            signal: controller.signal
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
  }, []);

  return (
    <SimpleGrid>
      <ul>
        {games &&
         !isLoading &&
         !error &&
          games.map((game) => {
            return <li key={game.id}>{game.name}</li>;
          })}
      </ul>
    </SimpleGrid>
  );
}

export default GameGrid;
