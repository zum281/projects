import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { Results } from '../components/Results';
import { useGameContext } from '../context/GameContext';

export const ResultsPage: NextPage = () => {
  const router = useRouter();
  const { startGame, resetIndex } = useGameContext();

  const newGame = () => {
    startGame();
    resetIndex();
    router.push('/');
  };

  return (
    <>
      <Results />
      <Button size="lg" onClick={newGame} colorScheme={'pink'}>
        New game
      </Button>
    </>
  );
};

export default ResultsPage;
