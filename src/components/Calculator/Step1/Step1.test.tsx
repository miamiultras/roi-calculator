import * as React from 'react';
import { shallow } from 'enzyme';
import Step1 from './Step1';

function functionMock() { }

function setup() {
  const props = {};
  const wrapper = shallow(<Step1 qualityLevel='high' handleChange={functionMock} />);
  return {
    wrapper,
    props,
  };
}

describe('Step1 component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
