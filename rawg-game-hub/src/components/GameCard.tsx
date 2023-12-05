import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIocnList from "./PlatformIocnList";
import CriticScore from "./CriticScore";
import getCroppedImageurl from "../services/image-url";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageurl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIocnList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
