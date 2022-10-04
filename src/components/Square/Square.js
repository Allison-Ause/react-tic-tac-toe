import { Box } from '@chakra-ui/react';
import { useGame } from '../../context/gameContext';

export default function Square({ space, content }) {
  //create an onClick handler that updates setBoard (add back in space and setBoard to passed props)
  const { takeTurn } = useGame();

  const handleClick = () => {
    console.log('firing');
    takeTurn({ space, content });
  };

  return (
    <Box
      bg="#B2F5EA"
      height="120px"
      w="120px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      boxShadow="base"
      onClick={handleClick}
    >
      <div>
        <span>{content}</span>
      </div>
    </Box>
  );
}
