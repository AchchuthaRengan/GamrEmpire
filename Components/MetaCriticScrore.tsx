import React from "react";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function MetaCriticScrore({ score }: Props) {
  const colorScheme = {
    good: "green",
    average: "yellow",
    bad: "red",
  };

  return (
    <>
      <Badge
        colorScheme={
          score > 90
            ? colorScheme.good
            : score > 50
            ? colorScheme.average
            : colorScheme.bad
        }
        fontSize={15}
        borderRadius="4px"
        paddingX="5px"
      >
        {score}
      </Badge>
    </>
  );
}

export default MetaCriticScrore;
