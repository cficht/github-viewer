import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo';

describe('Repo component', () => {
  it('renders Repo', () => {
    const wrapper = shallow(<Repo 
      name="about-me"
      html_url="https://github.com/cficht/about-me"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
