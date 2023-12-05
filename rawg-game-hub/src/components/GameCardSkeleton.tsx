import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import { CardBody } from "react-bootstrap";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px">
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
