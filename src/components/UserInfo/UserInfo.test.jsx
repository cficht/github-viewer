import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './UserInfo';

describe('UserInfo component', () => {
  it('renders UserInfo', () => {
    const wrapper = shallow(<UserInfo 
      login="cficht"
      followers={2}
      following={7}
      html_url="https://github.com/cficht"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
