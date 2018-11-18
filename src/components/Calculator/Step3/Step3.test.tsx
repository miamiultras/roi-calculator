import * as React from 'react';
import { shallow } from 'enzyme';
import Step3 from './Step3';

function functionMock() { }

function setup() {
  const props = {};
  const wrapper = shallow(
    <Step3
      pricePerTicket='19.99'
      handleChange={functionMock}
      handleSubmit={functionMock}
    />
  );
  return {
    wrapper,
    props,
  };
}

describe('Step3 component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
