import * as React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

function setup() {
  const props = {};
  const wrapper = shallow(<Home />);
  return {
    wrapper,
    props,
  };
}

describe('Home component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
