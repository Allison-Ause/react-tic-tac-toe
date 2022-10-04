import { Button, SimpleGrid } from '@chakra-ui/react';
import { useGame } from '../../context/gameContext';
import Square from '../Square/Square';
import './Gameboard.css';

export default function Gameboard() {
  const { board, active, resetGame } = useGame();

  const handleClick = () => {
    resetGame();
  };

  return (
    <div className="gameboard">
      <SimpleGrid columns={3} spacing={5} padding={25} w={500}>
        {board.map((box) => (
          <Square key={box.space} {...box} />
        ))}
      </SimpleGrid>
      {!active && <Button onClick={handleClick}>Reset Game</Button>}
    </div>
  );
}
