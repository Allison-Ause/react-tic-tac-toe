import { SimpleGrid } from '@chakra-ui/react';
import { useGame } from '../../context/gameContext';
import Square from '../Square/Square';

export default function Gameboard() {
  const { board, setBoard } = useGame();
  return (
    <div>
      <SimpleGrid columns={3} spacing={5} padding={25}>
        {board.map((box) => (
          <Square key={box.space} {...box} setBoard={setBoard} />
        ))}
      </SimpleGrid>
      <button>Reset Game</button>
    </div>
  );
}
