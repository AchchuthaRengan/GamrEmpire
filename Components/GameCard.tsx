import { Game } from '@/Interface/IGamrEmpire'
import React from 'react'
import {Card,CardBody,HStack,Heading} from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

interface Props {
    game:Game
}

function GameCard({game}:Props) {
  return (
    <Card>
      <Image src={game.background_image} alt={game.name} width={600} height={400}/>
      <CardBody>
        <HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard