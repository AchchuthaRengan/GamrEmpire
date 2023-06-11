import { IPlatform } from "@/Interface/IGamrEmpire";
import useData from "./useData";

const usePlatforms = () => useData<IPlatform>("/platforms/lists/parents");

export default usePlatforms;
