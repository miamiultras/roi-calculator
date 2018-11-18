import * as React from 'react';
import { shallow } from 'enzyme';
import Report from './Report';

function setup() {
  const props = {};
  const wrapper = shallow(<Report data={[]} />);
  return {
    wrapper,
    props,
  };
}

describe('Report component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
