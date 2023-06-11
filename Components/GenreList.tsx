import React from "react";
import { IGenre } from "@/Interface/IGamrEmpire";
import {
  Heading,
  List,
  ListItem,
  Image,
  HStack,
  Button,
  Spinner,
} from "@chakra-ui/react";
import cropperImageService from "@/Extensions/CropperImageService";
import useGenres from "@/Hooks/useGenres";

interface Props {
  onSelect: (genre: IGenre) => void;
  selectedGenre: IGenre | null;
}

function GenreList({ onSelect, selectedGenre }: Props) {

  const {data, error, isLoading} = useGenres();

  // const [genres, setGenres] = useState<IGenre[]>([]);
  // const [error, setError] = useState<string>("");
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const getGenres = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await RawgAPI.get("/genres", {
  //         signal: controller.signal,
  //       });
  //       const data = await response.data.results;
  //       setGenres(data);
  //       setIsLoading(false);
  //     } catch (error: any) {
  //       setIsLoading(true);
  //       setError(error);
  //       setIsLoading(false);
  //     }
  //   };
  //   getGenres();
  // }, []);

  return (
    <>
      <Heading fontSize="2xl" textAlign={"left"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading && <Spinner />}
        {data &&
          !isLoading &&
          !error &&
          data.map((genre:IGenre) => {
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
                    fontWeight={
                      genre.id === selectedGenre?.id ? "bold" : "normal"
                    }
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
