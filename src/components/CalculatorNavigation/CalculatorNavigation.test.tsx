import * as React from 'react';
import { shallow } from 'enzyme';
import CalculatorNavigation from './CalculatorNavigation';

function setup() {
  const props = {};
  const wrapper = shallow(<CalculatorNavigation step={1} />);
  return {
    wrapper,
    props,
  };
}

describe('CalculatorNavigation component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
