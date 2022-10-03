import Box from '../Box/Box';

export default function Gameboard() {
  //map through the box objects to create a bunch of boxes
  return (
    <div>
      <Box />
      <button>Reset Game</button>
    </div>
  );
}
