import { Game } from '@/Interface/IGamrEmpire'
import React from 'react'
import {Card,CardBody,HStack,Heading} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import cropperImageService from '@/Extensions/CropperImageService';

interface Props {
    game:Game
}

function GameCard({game}:Props) {
  return (
    <Card>
      <Image src={game && game.background_image && cropperImageService(game.background_image)} alt={game.name}/>
      <CardBody>
        <HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard