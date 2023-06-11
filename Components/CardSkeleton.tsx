import React from "react";
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function CardSkeleton() {
  return <Card borderRadius={20}>
    <Skeleton height='200px'/>
    <CardBody>
        <SkeletonText/>
    </CardBody>
  </Card>;
}

export default CardSkeleton;
