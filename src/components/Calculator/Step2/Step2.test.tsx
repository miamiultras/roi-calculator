import * as React from 'react';
import { shallow } from 'enzyme';
import Step2 from './Step2';

function functionMock() { }

function setup() {
  const props = {};
  const wrapper = shallow(
    <Step2 estimatedSellInput='15000' handleChange={functionMock} />
  );
  return {
    wrapper,
    props,
  };
}

describe('Step2 component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
