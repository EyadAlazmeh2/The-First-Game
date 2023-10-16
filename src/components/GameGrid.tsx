import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import UseGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, games, isLoading } = UseGames()
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8]


  return (
    <>
      {error && (
        <Text color="red" fontSize="30px">
          {error}
        </Text>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing="10"
        padding="10px"
      >
        {isLoading && Skeletons.map(skeleton => <GameCardSkeleton key={skeleton}></GameCardSkeleton>)}
        {games.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
