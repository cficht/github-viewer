import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos';

describe('Repos component', () => {
  it('renders Repos', () => {
    const repos = [
      {
        id: 233724660,
        name: 'about-me',
        html_url: 'https://github.com/cficht/about-me'
      },
      {
        id: 250081461,
        name: 'book-application',
        html_url: 'https://github.com/cficht/book-application'
      }
    ];
    const wrapper = shallow(<Repos repos={repos}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
