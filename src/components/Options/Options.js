import { Select } from '@chakra-ui/react';
import { useGame } from '../../context/gameContext';
import './Options.css';

export default function Options() {
  const { selectPlayerOne, selectPlayerTwo } = useGame();

  const handlePlayerOne = (e) => {
    selectPlayerOne(e);
  };

  const handlePlayerTwo = (e) => {
    selectPlayerTwo(e);
  };

  return (
    <>
      <h1>Choose Your Fighter!</h1>
      <div className="options">
        <Select
          placeholder="Player One:"
          variant="flushed"
          w={175}
          mr={15}
          onChange={handlePlayerOne}
        >
          <option value={'🐛'}>🐛</option>
          <option value={'🐑'}>🐑</option>
          <option value={'🥚'}>🥚</option>
          <option value={'🔑'}>🔑</option>
        </Select>
        <Select
          placeholder="Player Two:"
          variant="flushed"
          w={175}
          ml={15}
          onChange={handlePlayerTwo}
        >
          <option value={'🦋'}>🦋</option>
          <option value={'🧶'}>🧶</option>
          <option value={'🍳'}>🍳</option>
          <option value={'🗝'}>🗝</option>
        </Select>
      </div>
    </>
  );
}
