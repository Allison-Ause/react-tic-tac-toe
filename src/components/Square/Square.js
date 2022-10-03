import { Box } from '@chakra-ui/react';

export default function Square({ content }) {
  //create an onClick handler that updates setBoard (add back in space and setBoard to passed props)
  return (
    <Box
      bg="#B2F5EA"
      height="120px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      boxShadow="base"
    >
      <span>{content}</span>
    </Box>
  );
}
