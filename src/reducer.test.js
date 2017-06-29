import reducer from './reducer';
import * as actions from './actions';

describe.only('reducer', () => {

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
});

describe('newGame', () => {

});

describe('makeGuess', () => {

});

describe('toggleInfoModal', () => {

});
