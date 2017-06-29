import React from 'react';
import { shallow } from 'enzyme';

import { TopNav } from './top-nav';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Should dispatch newGame() when New Game is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    wrapper.find('.new').simulate('click', {
      preventDefault() {}
    });
    expect(dispatch).toHaveBeenCalled();
  });

  it('Should dispatch toggleInfoModal() when What is clickd', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    wrapper.find('.what').simulate('click', {
      preventDefault() {}
    });
    expect(dispatch).toHaveBeenCalled();
  });
});
