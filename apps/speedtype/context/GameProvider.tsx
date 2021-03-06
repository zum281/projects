import { useEffect, useMemo, useState } from 'react';
import { GameContext } from './GameContext';
import { CharColor } from '../types/enums';
import { useInitialText } from '../hooks/useInitialText';
import { charObj } from '../types';
import { useColorMode } from '@chakra-ui/react';

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode();
  const [refresh, setRefresh] = useState(false);
  const { initialChars } = useInitialText(refresh, setRefresh);
  const [playing, setPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chars, setChars] = useState<charObj[]>([]);
  const [errors, setErros] = useState(0);
  const seconds = useMemo(() => timer / 10, [timer]);
  const gameOver = useMemo(
    () => initialChars.length > 0 && currentIndex === initialChars.length,
    [initialChars, currentIndex]
  );

  useEffect(() => setChars([...initialChars]), [initialChars, playing]);

  const startGame = () => {
    setTimer(0);
    setCurrentIndex(0);
    setRefresh(true);
    setPlaying(true);
  };

  const resetGame = () => {
    setTimer(0);
    setCurrentIndex(0);
    setRefresh(true);
    setPlaying(false);
  };

  const stopGame = () => setPlaying(false);

  const increaseIndex = () => setCurrentIndex(currentIndex + 1);
  const decreaseIndex = () => setCurrentIndex(currentIndex - 1);
  const resetIndex = () => setCurrentIndex(0);

  const backspace = () => {
    if (chars[currentIndex - 1].color === CharColor.RED) removeError();

    const newChars = chars.map((char) => {
      if (char.index === currentIndex - 1) {
        char.color = colorMode === 'light' ? CharColor.BLACK : CharColor.WHITE;
      }
      return char;
    });
    setChars([...newChars]);

    decreaseIndex();
  };

  const correctAnswer = () => {
    const newChars = chars.map((char) => {
      if (char.index === currentIndex) {
        char.color = CharColor.GREEN;
      }
      return char;
    });

    setChars([...newChars]);
    increaseIndex();
  };

  const wrongAnswer = () => {
    const newChars = chars.map((char) => {
      if (char.index === currentIndex) {
        char.color = CharColor.RED;
      }
      return char;
    });

    setChars([...newChars]);
    increaseIndex();
    addError();
  };

  const addError = () => {
    setErros(errors + 1);
  };

  const removeError = () => {
    setErros(errors - 1);
  };

  const value = {
    playing,
    startGame,
    stopGame,
    timer,
    setTimer,
    chars,
    correctAnswer,
    wrongAnswer,
    setChars,
    backspace,
    currentIndex,
    increaseIndex,
    decreaseIndex,
    resetIndex,
    initialChars,
    errors,
    addError,
    removeError,
    seconds,
    gameOver,
    resetGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
