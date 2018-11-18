import * as React from 'react';
import { shallow } from 'enzyme';
import NextButton from './NextButton';

function setup() {
  const props = {};
  const wrapper = shallow(<NextButton name='test' to='test' />);
  return {
    wrapper,
    props,
  };
}

describe('NextButton component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
