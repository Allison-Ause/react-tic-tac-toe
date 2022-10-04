import { Box } from '@chakra-ui/react';
import { useGame } from '../../context/gameContext';

export default function Message() {
  const { gameMessage } = useGame();
  return (
    <div>
      <Box boxShadow="inner" p="6" rounded="md" bg="teal" color="white">
        Current Message: {gameMessage}
      </Box>
    </div>
  );
}
