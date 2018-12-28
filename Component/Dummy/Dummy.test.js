import React from 'react';
import { shallow } from 'enzyme';
import Dummy from './Dummy';

describe('<Dummy />', () => {
  test('renders', () => {
    const wrapper = shallow(<Dummy />);
    expect(wrapper).toMatchSnapshot();
  });
});
