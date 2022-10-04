import { Box } from '@chakra-ui/react';
import { useGame } from '../../context/gameContext';
import './Message.css';

export default function Message() {
  const { gameMessage } = useGame();
  return (
    <div className="message">
      <Box boxShadow="inner" p="6" rounded="md" bg="teal" color="white" h="90px">
        {gameMessage}
      </Box>
    </div>
  );
}
