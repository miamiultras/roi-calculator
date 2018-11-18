import * as React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

function setup() {
  const props = {};
  const wrapper = shallow(<Table data={[]} />);
  return {
    wrapper,
    props,
  };
}

describe('Table component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
