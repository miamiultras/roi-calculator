import * as React from 'react';
import { shallow } from 'enzyme';
import BackButton from './BackButton';

function setup() {
  const props = {};
  const wrapper = shallow(<BackButton name='test' to='test' />);
  return {
    wrapper,
    props,
  };
}

describe('BackButton component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
