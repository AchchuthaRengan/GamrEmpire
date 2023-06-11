import React from "react";
import { useEffect, useState } from "react";
import RawgAPI from "@/pages/api/RAWGAPI";
import { Genre } from "@/Interface/IGamrEmpire";
import {
  Heading,
  List,
  ListItem,
  Image,
  HStack,
  Button,
  Spinner
} from "@chakra-ui/react";
import cropperImageService from "@/Extensions/CropperImageService";

interface Props {
  onSelect:(genre: Genre) => void; 
}

function GenreList({onSelect}:Props) {
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
    <>
      <Heading fontSize="2xl" textAlign={"left"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading && <Spinner/>}
        {genres &&
          !isLoading &&
          !error &&
          genres.map((genre) => {
            return (
              <ListItem key={genre.id} paddingY="5px">
                <HStack>
                  <Image
                    src={
                      genre &&
                      genre.image_background &&
                      cropperImageService(genre.image_background)
                    }
                    alt={genre.name}
                    objectFit="cover"
                    boxSize="32px"
                    borderRadius={8}
                  />
                  <Button
                    size="lg"
                    variant="link"
                    whiteSpace="normal"
                    textAlign="left"
                    onClick={() => {
                      onSelect(genre);
                    }}
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            );
          })}
      </List>
    </>
  );
}

export default GenreList;
