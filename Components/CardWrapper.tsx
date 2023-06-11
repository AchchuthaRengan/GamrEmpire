import React, { ReactNode } from 'react'
import { Box } from "@chakra-ui/react";

interface Props {
    children:ReactNode
}

function CardWrapper({children}:Props) {
  return (
    <Box borderRadius={10} overflow='hidden'>
        {children}
    </Box>
  )
}

export default CardWrapper