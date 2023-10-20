import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformListIcon from "./PlatformListIcon";
import CiriticScore from "./CiriticScore";
import getCroppedImageUrl from "../services/Image-url";
import Emojis from "./Emojis";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={2}>
            <PlatformListIcon
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CiriticScore score={game.metacritic}></CiriticScore>
          </HStack>
          <Heading fontSize="xl" marginBottom={1}>
            {game.name}
          </Heading>
          <Emojis rating={game.rating_top} />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
