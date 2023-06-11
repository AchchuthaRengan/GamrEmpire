import { IGameQuery } from "@/Interface/IGamrEmpire";
import useData from "./useData";
import { IGame } from "@/Interface/IGamrEmpire";

const useGames = (gameQuery: IGameQuery) =>
  useData<IGame>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );

export default useGames;
