import { IGenre } from "@/Interface/IGamrEmpire";
import useData from "./useData";

const useGenres = () => useData<IGenre>("/genres");

export default useGenres;
