import { Game } from "@/Interface/IGamrEmpire";
import React from "react";
import { Card, CardBody, HStack, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import cropperImageService from "@/Extensions/CropperImageService";
import Platforms from "./Platforms";
import MetaCriticScrore from "./MetaCriticScrore";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <Image
        src={
          game &&
          game.background_image &&
          cropperImageService(game.background_image)
        }
        alt={game.name}
      />
      <CardBody>
        <HStack justifyContent={'space-between'} marginBottom={3}>
          <Platforms
            platforms={
              game &&
              (game.parent_platforms) &&
              game.parent_platforms.map((p) => p.platform)
            }
          />        
          <MetaCriticScrore score={game && game.metacritic}/>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
