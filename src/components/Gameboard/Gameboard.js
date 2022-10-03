import { SimpleGrid } from '@chakra-ui/react';
import { useGame } from '../../context/gameContext';
import Square from '../Square/Square';

export default function Gameboard() {
  const { board, setBoard } = useGame();
  console.log('board', board);
  //map through the box objects to create a bunch of boxes
  return (
    <div>
      <SimpleGrid columns={3} spacing={5}>
        {board.map((box) => (
          <Square key={box.space} {...box} setBoard={setBoard} />
        ))}
      </SimpleGrid>
      <button>Reset Game</button>
    </div>
  );
}
