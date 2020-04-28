import React from 'react';
import { shallow } from 'enzyme';
import UserEnter from './UserEnter';

describe('UserEnter component', () => {
  it('renders UserEnter', () => {
    const wrapper = shallow(<UserEnter 
      username="cficht"
      onUserChange={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
