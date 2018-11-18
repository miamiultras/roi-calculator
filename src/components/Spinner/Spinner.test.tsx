import * as React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

function setup() {
  const props = {};
  const wrapper = shallow(<Spinner />);
  return {
    wrapper,
    props,
  };
}

describe('Spinner component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
