import { ref } from 'vue';

export default function useBoard() {
  const board = ref(Array(9).fill(null));
  const playerValue = ref('X');

  const markSquare = (i) => {
    const boardCopy = board.value.slice();
    boardCopy[i] = playerValue.value;
    board.value = boardCopy;
    // eslint-disable-next-line no-unused-expressions
    playerValue.value === 'X' ? (playerValue.value = 'O') : (playerValue.value = 'X');
  };
  return {
    board,
    playerValue,
    markSquare,
  };
}
