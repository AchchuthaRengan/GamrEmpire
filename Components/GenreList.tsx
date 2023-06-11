import React from 'react'
import { useEffect, useState } from "react";
import RawgAPI from "@/pages/api/RAWGAPI";
import { Genre } from '@/Interface/IGamrEmpire';

function GenreList() {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    useEffect(() => {
      const controller = new AbortController();
      const getGenres = async () => {
        try {
          setIsLoading(true);
          const response = await RawgAPI.get("/genres", {
            signal: controller.signal,
          });
          const data = await response.data.results;
          setGenres(data);
          setIsLoading(false);
        } catch (error: any) {
          setIsLoading(true);
          setError(error);
          setIsLoading(false);
        }
      };
      getGenres();
    }, []);

  return (
    <ul>
        {genres && !isLoading && !error && genres.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>
        })}
    </ul>
  )
}

export default GenreList