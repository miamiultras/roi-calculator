import * as React from 'react';
import { shallow } from 'enzyme';
import Paragraph from './Paragraph';

function setup() {
  const props = {};
  const wrapper = shallow(<Paragraph>test</Paragraph>);
  return {
    wrapper,
    props,
  };
}

describe('Paragraph component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
