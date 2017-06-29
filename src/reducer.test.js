import reducer from './reducer';
import * as actions from './actions';

describe('reducer', () => {
  const guess1 = 100;
  const guess2 = 80;
  const guess3 = 40;
  const guess4 = 49;
  const guess5 = 50;
  const invalidGuess = 'twenty';

  it('Should show the initialState state where nothing is passed in', () => {
    const state = reducer(undefined, {type: '__Unknown'});
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(1);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(state.showInfoModal).toEqual(false);
  });
  it('Should return current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '_Unknown'});
    expect(state).toBe(currentState);
  });


  describe('newGame', () => {
    it('Should reset the game', () => {
      let state;
      state = reducer(state, actions.newGame());
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Make your guess!');
      expect(state.correctAnswer).toBeGreaterThanOrEqual(1);
      expect(state.correctAnswer).toBeLessThanOrEqual(100);
      expect(state.showInfoModal).toEqual(false);
    });
  });

  describe('makeGuess', () => {
    it('Should add a guess to the guesses array', () => {
      let state;
      state = reducer(state, actions.makeGuess(guess1));
      state = reducer(state, actions.makeGuess(guess2));
      state = reducer(state, actions.makeGuess(guess3));
      state = reducer(state, actions.makeGuess(guess4));
      state = reducer(state, actions.makeGuess(guess5));
      state = reducer(state, actions.makeGuess(invalidGuess));
      expect(state.guesses).toEqual([guess1, guess2, guess3, guess4, guess5]);
    });
    it('Should provide the right feedback', () => {
      let state = {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: guess5,
        showInfoModal: false
      };
      state = reducer(state, actions.makeGuess(guess1));
      expect(state.feedback).toEqual('You\'re Ice Cold...');
      state = reducer(state, actions.makeGuess(guess2));
      expect(state.feedback).toEqual('You\'re Cold...');
      state = reducer(state, actions.makeGuess(guess3));
      expect(state.feedback).toEqual('You\'re Warm');
      state = reducer(state, actions.makeGuess(guess4));
      expect(state.feedback).toEqual('You\'re Hot!');
      state = reducer(state, actions.makeGuess(guess5));
      expect(state.feedback).toEqual('You got it!');
      state = reducer(state, actions.makeGuess(invalidGuess));
      expect(state.feedback).toEqual('Please enter a valid number');
    });

  });

  describe('toggleInfoModal', () => {
    it('Should toggle the info modal', () => {
      let state;
      state = reducer(state, actions.toggleInfoModal());
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Make your guess!');
      expect(state.correctAnswer).toBeGreaterThanOrEqual(1);
      expect(state.correctAnswer).toBeLessThanOrEqual(100);
      expect(state.showInfoModal).toEqual(true);
      state = reducer(state, actions.toggleInfoModal());
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Make your guess!');
      expect(state.correctAnswer).toBeGreaterThanOrEqual(1);
      expect(state.correctAnswer).toBeLessThanOrEqual(100);
      expect(state.showInfoModal).toEqual(false);
    });
  });
});
