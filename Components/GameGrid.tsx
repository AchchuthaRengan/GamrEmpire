import { IGame, IGameQuery } from "@/Interface/IGamrEmpire";
import RawgAPI from "@/pages/api/RAWGAPI";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import CardWrapper from "./CardWrapper";
import CardSkeleton from "./CardSkeleton";
import useGames from "@/Hooks/useGames";

interface Props {
  // selectedGenre: IGenre | null;
  // selectedPlatform: IPlatform | null;
  // selectedSorting:string;
  // searchedString:string;
  gameQuery: IGameQuery
}

function GameGrid({gameQuery}: Props) {
  
  const {data, error, isLoading} = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  
  // const [games, setGames] = useState<IGame[]>([]);
  // const [error, setError] = useState<string>("");
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={10}
      spacing={6}
    >
      {isLoading &&
        skeletons.map((card) => (
          <CardWrapper key={card}>
            <CardSkeleton key={card} />
          </CardWrapper>
        ))}
      {data &&
        !isLoading &&
        !error &&
        data.map((game:IGame) => {
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
