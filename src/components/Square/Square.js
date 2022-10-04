import { Box } from '@chakra-ui/react';
import { useGame } from '../../context/gameContext';
import './Square.css';

export default function Square({ space, content }) {
  const { takeTurn } = useGame();

  const handleClick = () => {
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
      <div className="squares">
        <span>{content}</span>
      </div>
    </Box>
  );
}
