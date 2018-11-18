import * as React from 'react';
import { shallow } from 'enzyme';
import ExtendedReport from './ExtendedReport';

function setup() {
  const props = {};
  const wrapper = shallow(<ExtendedReport extendedData={[]} />);
  return {
    wrapper,
    props,
  };
}

describe('ExtendedReport component', () => {
  it('should match snapshot if no change was intended', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
