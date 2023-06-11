import { IGameQuery } from '@/Interface/IGamrEmpire'
import React from 'react';
import {Heading} from '@chakra-ui/react'

interface Props {
    gameQuery:IGameQuery
}

function MainHeading({gameQuery}:Props) {

  const heading = `${gameQuery.platform ? gameQuery.platform.name : ''} ${gameQuery.genre ?  gameQuery.genre.name : ''} Games`

  return (
    <Heading as='h1' textAlign='start' fontSize='5xl' marginY={5}>{heading}</Heading>
  )
}

export default MainHeading