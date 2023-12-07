import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIocnList from "./PlatformIocnList";
import CriticScore from "./CriticScore";
import getCroppedImageurl from "../services/image-url";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageurl(game.background_image, 400, 600)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIocnList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
