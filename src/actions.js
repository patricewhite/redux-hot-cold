export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    correctAnswer: Math.round(Math.random() * 100),
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});



export const Receive_TOTAL_GUESSES = 'Receive_TOTAL_GUESSES';
export const receiveTotalGuesses = total => ({
  type: Receive_TOTAL_GUESSES,
  total
});


export const submitTotalGuesses = () => dispatch => {
  return fetch('http://localhost:8080/numTries').then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(total => {
    dispatch(receiveTotalGuesses(total));
  });
};
