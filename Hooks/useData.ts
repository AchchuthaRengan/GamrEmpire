import { useState, useEffect } from "react";
import RawgAPI from "@/pages/api/RAWGAPI";
import { AxiosRequestConfig } from "axios";
import { IFetchResponse } from "@/Interface/IGamrEmpire";

//Basic Skeleton of the useEffect Method as a Base Function
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(
    () => {
      const controller = new AbortController();
      const getData = async () => {
        try {
          setIsLoading(true);
          const response = await RawgAPI.get<IFetchResponse<T>>(endpoint, {
            signal: controller.signal,
            //   params: {
            //     genres: selectedGenre?.id,
            //     platforms: selectedPlatform?.id,
            //     ordering: selectedSorting,
            //     search: searchedString,
            //   },
            ...requestConfig,
          });
          setData(response.data.results);
          setIsLoading(false);
        } catch (error: any) {
          setIsLoading(true);
          setError(error);
          setIsLoading(false);
        }
      };
      getData();
    },
    // selectedGenre?.id,
    // selectedPlatform?.id,
    // selectedSorting,
    // searchedString,
    dependencies ? [...dependencies] : []
  );

  return { data, error, isLoading };
};

export default useData;
