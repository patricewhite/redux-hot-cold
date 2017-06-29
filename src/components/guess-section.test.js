import React from 'react';
import {shallow} from 'enzyme';

import {GuessSection} from './guess-section';

describe('<GuessSection />', () => {
  it('renders without crashing', () => {
    shallow(<GuessSection />);
  });

  it('Renders feedback', () => {
    const feedback = "Example feedback";
    const wrapper = shallow(<GuessSection feedback={feedback} />);
    expect(wrapper.contains(feedback)).toEqual(true);
  });
})
